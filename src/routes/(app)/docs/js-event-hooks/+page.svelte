<script>
    import Toc from "@/components/Toc.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
    import eventHooks from "../event_hooks.js";

    // apply minor adjustments to the general Go hook description
    // to accommodate some of the changes in the JSVM implementation.
    function adjustForJS(text) {
        return text
            .replaceAll(/\.([A-Z])/gm, (_, p1) => "." + p1.toLowerCase())
            .replaceAll(/On(\w)/gm, "on$1")
            .replaceAll("App.", "$app.");
    }
</script>

<p>
    You can extend the default PocketBase behavior with custom server-side code using the exposed JavaScript
    app event hooks.
</p>
<p>
    Throwing an error or not calling <code>e.next()</code> inside a handler function stops the hook execution chain.
</p>
<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            All hook handler functions share the same <code>{`function(e){}`}</code> signature and expect the
            user to call <code>e.next()</code> if they want to proceed with the execution chain.
        </p>
    </div>
</div>

<Toc headingSelector="h1, h2, h3, h4, h5" />

{#each eventHooks as group}
    <HeadingLink title={group.title} tag={group.tag || "h3"} />

    {#if group.description}{@html adjustForJS(group.description)}{/if}

    {#if group.hooks}
        <div class="accordions">
            {#each Object.entries(group.hooks) as [hookTitle, hookInfo]}
                {#if hookInfo.js}
                    <Accordion single title={adjustForJS(hookTitle)}>
                        <div class="content m-b-sm">{@html adjustForJS(hookInfo.html)}</div>
                        <CodeBlock language="javascript" content={hookInfo.js} />
                    </Accordion>
                {/if}
            {/each}
        </div>
    {/if}
{/each}
