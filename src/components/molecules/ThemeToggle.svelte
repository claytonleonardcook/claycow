<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { Button } from "@/components/atoms";

    interface Props extends HTMLButtonAttributes {}

    let { onclick, ...props }: Props = $props();

    let isDark = $state(true);

    function onToggleClick() {
        isDark = !isDark;
        document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    }
</script>

<Button onclick={onToggleClick} {...props}>
    <span class="sr-only">Toggle color palette theme</span>
    <iconify-icon
        icon={isDark ? "fa6-solid:moon" : "fa6-solid:sun"}
        width={32}
        height={32}
    ></iconify-icon>
</Button>
