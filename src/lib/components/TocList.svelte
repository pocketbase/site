<script>
    // @see Toc.svelte
    export let links = [];
    export let level = 1;
</script>

{#if links}
    <ul class="toc-list-{level}">
        {#each links as link}
            <li>
                <a href="#{link.id}">{link.text}</a>
                {#if link.children?.length}
                    <svelte:self links={link.children} level={level + 1} />
                {/if}
            </li>
        {/each}
    </ul>
{/if}
