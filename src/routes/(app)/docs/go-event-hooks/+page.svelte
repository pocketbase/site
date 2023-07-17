<script>
    import Toc from "@/components/Toc.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
    import eventHooks from "../event_hooks.js";
</script>

<p>
    The standard way to modify the default PocketBase behavior is through
    <strong>event hooks</strong> in your Go code.
    <br />
    Each event hook has 3 main public methods:
</p>
<ul>
    <li class="m-b-10">
        <code class="txt-bold">PreAdd(handler)</code>
        - prepend a new handler function to the specified event hook.
        <br />
        Returning an error or <code>hook.StopPropagation</code> in the handler function stops the hook execution
        chain.
    </li>
    <li class="m-b-10">
        <code class="txt-bold">Add(handler)</code>
        - append a new handler function to the specified event hook.
        <br />
        Returning an error or <code>hook.StopPropagation</code> in the handler function stops the hook execution
        chain.
    </li>
    <li class="m-b-10">
        <code class="txt-bold">Trigger(data)</code>
        - triggers the event hook, aka. executes its handlers in the order they were added.
        <br />
        <em class="txt-hint">This method rarely has to be called manually by users.</em>
    </li>
</ul>
<p>
    To remove an already registered hook handler, you can use the handler id that is returned with each
    <code>Pre/Add</code> registration and pass it to <code>Remove(id)</code> or remove all handlers with
    <code>RemoveAll()</code> (<em>including system handlers</em>).
</p>

<p>You can explore all available event hooks below:</p>

<Toc />

{#each Object.entries(eventHooks) as [groupTitle, groupHooks]}
    <HeadingLink title={groupTitle} />

    <div class="accordions">
        {#each Object.entries(groupHooks) as [hookTitle, hookInfo]}
            {#if hookInfo.go}
                <Accordion single title={hookTitle}>
                    <div class="content m-b-sm">{@html hookInfo.html}</div>
                    <CodeBlock language="go" content={hookInfo.go} />
                </Accordion>
            {/if}
        {/each}
    </div>
{/each}
