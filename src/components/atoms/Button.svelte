<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface Props extends HTMLButtonAttributes {};

    let { children, ...props }: Props = $props();
</script>

<button {...props}>
    {@render children?.()}
</button>

<style>
    button {
        display: flex;
        gap: 0.5rem;
        color: var(--text);
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
    }

    button:hover {
        color: var(--subtext0);
    }
</style>