<script>
    import { page } from "$app/stores";
    import { equalPaths, hasPath } from "./doc_links.js";

    export let items = [];
</script>

<nav class="sidebar-list">
    {#each items as item (item.href + item.title)}
        {@const isCurrentPath = equalPaths(item.href, $page.url.pathname)}
        {@const hasCurrentChild = hasPath($page.url.pathname, item.children)}
        <a
            href={item.href}
            class="list-item"
            class:active={isCurrentPath || hasCurrentChild}
            target={item.target || null}
            rel={item.target == "_blank" ? "noopener noreferrer" : null}
        >
            <slot name="before" {item} />
            {#if item.icon}
                <span class="icon"><i class={item.icon} /></span>
            {/if}
            <span class="txt">{item.title}</span>
            <slot name="after" {item} />
        </a>
        {#if item.children?.length && (hasCurrentChild || isCurrentPath)}
            {#each item.children as child, i (child.href + child.title)}
                {@const isCurrentChildPath = equalPaths(child.href, $page.url.pathname)}
                <a
                    href={child.href}
                    class="sub-list-item"
                    class:active={isCurrentChildPath}
                    target={child.target || null}
                    rel={child.target == "_blank" ? "noopener noreferrer" : null}
                >
                    <slot name="childBefore" {child}>
                        <span class="tree-node">
                            {i == item.children.length - 1 ? "└" : "├"}
                        </span>
                    </slot>
                    {#if child.icon}
                        <span class="icon"><i class={child.icon} /></span>
                    {/if}
                    {child.title}
                    <slot name="childAfter" {child} />
                </a>
            {/each}
        {/if}
    {/each}
</nav>
