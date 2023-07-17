<script>
    import Toc from "@/components/Toc.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
    import eventHooks from "../event_hooks.js";

    // apply minor adjustments to the general Go hook description
    // to accommodate some of the changes in the JSVM implementation.
    function adjustForJS(text) {
        return text.replaceAll(/On(\w+.*)/gm, "on$1").replaceAll("hook.StopPropagation", "false");
    }
</script>

<p>
    You can extend the default PocketBase behavior with custom server-side code using the exposed JavaScript
    app level hooks.
</p>

<p>
    Throwing an error or returning <code>false</code> inside a hook handler function stops the hook execution chain.
</p>

<Toc />

{#each Object.entries(eventHooks) as [groupTitle, groupHooks]}
    <HeadingLink title={groupTitle} />

    <div class="accordions">
        {#each Object.entries(groupHooks) as [hookTitle, hookInfo]}
            {#if hookInfo.js}
                <Accordion single title={adjustForJS(hookTitle)}>
                    <div class="content m-b-sm">{@html adjustForJS(hookInfo.html)}</div>
                    <CodeBlock language="javascript" content={hookInfo.js} />
                </Accordion>
            {/if}
        {/each}
    </div>
{/each}
