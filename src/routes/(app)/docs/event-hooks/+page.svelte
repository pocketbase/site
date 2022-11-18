<script>
    import Toc from "@/components/Toc.svelte";
    import AppHooks from "./AppHooks.svelte";
    import ModelHooks from "./ModelHooks.svelte";
    import MailerHooks from "./MailerHooks.svelte";
    import RecordHooks from "./RecordHooks.svelte";
    import RealtimeHooks from "./RealtimeHooks.svelte";
    import FileHooks from "./FileHooks.svelte";
    import AdminHooks from "./AdminHooks.svelte";
    import CollectionHooks from "./CollectionHooks.svelte";
    import SettingsHooks from "./SettingsHooks.svelte";
</script>

<p>
    The standard way to modify the default PocketBase behavior is through
    <strong>event hooks</strong> in your Go code.
</p>
<p>Each event hook has 2 public methods:</p>
<ul>
    <li class="m-b-10">
        <code class="txt-bold">Add(fn)</code>
        - registers a new listener callback function to the specified event hook.
        <br />
        Returning an error or <code>hook.StopPropagation</code> in the callback function stops the listeners execution
        chain.
    </li>
    <li class="m-b-10">
        <code class="txt-bold">Trigger(data)</code>
        - triggers the event hook, aka. executes its listeners in the order they were added.
        <br />
        <em class="txt-hint">This method usually is not called manually by users.</em>
    </li>
</ul>

<p>You can explore all available event hooks below:</p>
<Toc />

<AppHooks />
<ModelHooks />
<MailerHooks />
<RecordHooks />
<RealtimeHooks />
<FileHooks />
<CollectionHooks />
<SettingsHooks />
<AdminHooks />
