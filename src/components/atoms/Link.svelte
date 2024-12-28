<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";

    interface Props extends HTMLAnchorAttributes {};

    let { children, ...props }: Props = $props();
</script>

<a {...props}>
    {@render children?.()}
</a>

<style>
    a {
        display: flex;
        gap: 0.5rem;
        color: var(--text);
        text-decoration: none;
    }

    a:hover {
        color: var(--subtext0);
    }
</style>