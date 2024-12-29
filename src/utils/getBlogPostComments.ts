import { BLUESKY_DID } from "@/consts";
import formatBlogTitleUrl from "./formatBlogTitleUrl";
import { AppBskyFeedPost, AtpAgent } from '@atproto/api'
import { isThreadViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

async function getBlogPostComments(blogTitle: string) {

    const agent = new AtpAgent({ service: new URL("https://public.api.bsky.app") })

    const post = await agent.app.bsky.feed.searchPosts({
        q: `from:claycow.com #blog #${formatBlogTitleUrl(blogTitle)}`,
        author: BLUESKY_DID,
        limit: 1
    }).then(({ data }) => {
        if (!data.posts) return undefined;

        return data.posts[0];
    }).catch(console.error);

    if (!post) return [];

    if (post.replyCount === 0) return [];

    const comments = await agent.app.bsky.feed.getPostThread({
        uri: post.uri,
        depth: 1
    }).then(({ data }) => {
        if (!isThreadViewPost(data.thread)) return [];

        if (!data.thread.replies) return [];

        return data.thread.replies.map((reply) => {
            if (!isThreadViewPost(reply)) return null;

            return {
                ...reply.post,
                record: {
                    ...reply.post.record as AppBskyFeedPost.Record
                }
            };
        }).filter(reply => reply !== null);
    })
        .catch((error) => {
            console.error(error);
            return [];
        });

    return comments;
}

export default getBlogPostComments;