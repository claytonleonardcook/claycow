<script lang="ts">
    import { formatDate } from "@/utils";
    import getBlogPostComments from "@/utils/getBlogPostComments";

    interface Props {
        blogTitle: string;
    }

    let { blogTitle }: Props = $props();

    const comments = getBlogPostComments(blogTitle);
</script>

<section class="bluesky-comments">
    <h2>Comments 🗣️</h2>

    {#await comments}
        <p>No comments just yet 🐄</p>
    {:then comments}
        {#each comments as comment}
            <article
                class="comment"
                aria-labelledby="comment-{comment.cid}-author"
            >
                <header>
                    <h2
                        class="comment-author"
                        id="comment-{comment.cid}-author"
                    >
                        <a
                            href={`https://bsky.app/profile/${comment.author.did}`}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="{comment.author
                                .displayName}'s profile on Bluesky"
                        >
                            {comment.author.displayName}
                            <span class="handle"
                                >(@{comment.author.handle})</span
                            >
                        </a>
                        <time
                            class="comment-time"
                            aria-label="Commented on"
                            datetime={comment.record.createdAt}
                        >
                            {formatDate(new Date(comment.record.createdAt))}
                        </time>
                    </h2>
                </header>
                <p class="comment-body">{comment.record.text}</p>
                <footer class="comment-counts">
                    <a
                        href={`https://bsky.app/profile/${comment.author.did}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <p class="likes">
                            <iconify-icon
                                icon={"fa6-solid:heart"}
                                height={"1rem"}
                            ></iconify-icon>
                            {comment.likeCount} Likes
                        </p>
                        <p class="replies">
                            <iconify-icon
                                icon={"fa6-solid:comment"}
                                height={"1rem"}
                            ></iconify-icon>
                            {comment.replyCount} Replies
                        </p>
                        <p class="replies">
                            <iconify-icon
                                icon={"fa6-solid:repeat"}
                                height={"1rem"}
                            ></iconify-icon>
                            {comment.quoteCount} Quotes
                        </p>
                    </a>
                </footer>
            </article>
        {/each}
    {/await}
</section>

<style>
    .bluesky-comments {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .bluesky-comments > h2 {
        margin-bottom: 0;
    }

    .bluesky-comments > article {
        background-color: var(--surface0);
        padding: 1rem;
        border-radius: 0.5rem;
    }

    .comment-author {
        display: flex;
        flex-direction: row;
        font-size: medium;
        margin: 0;
    }

    .comment-author > a {
        flex-grow: 1;
        text-decoration: none;
        color: var(--text);
    }

    .comment-author > a > .handle {
        color: var(--subtext0);
    }

    .comment-author > .comment-time {
        color: var(--subtext0);
        font-size: x-small;
    }

    .comment-body {
        margin: 1rem 0 0;
    }

    .comment-counts > a {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        text-decoration: none;
        color: var(--text);
    }

    .comment-counts > a > p {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0;
    }
</style>
