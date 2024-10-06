<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import { codePreferences, setCodePreference } from "@/stores/preferences";

    let classes = "m-t-10 m-b-base";
    export { classes as class }; // export reserved keyword

    export let js = "";
    export let dart = "";
    export let go = "";
    export let group = ""; // preferences store group key

    $: tabs = [
        {
            title: "Go",
            language: "go",
            content: go,
        },
        {
            title: "JavaScript",
            language: "javascript",
            content: js,
        },
        {
            title: "Dart",
            language: "dart",
            content: dart,
        },
    ];

    $: nonEmptyTabs = tabs.filter((item) => item.content != "");

    $: activeLanguage =
        nonEmptyTabs.find((item) => item.language == $codePreferences[group])?.language ||
        nonEmptyTabs?.[0]?.language;
</script>

<div class="tabs code-tabs {classes}">
    <div class="tabs-header compact left">
        {#each nonEmptyTabs as tab (tab.language)}
            <button
                class="tab-item"
                class:active={activeLanguage === tab.language}
                on:click={() => setCodePreference(tab.language, group)}
            >
                <div class="txt">{tab.title}</div>
            </button>
        {/each}
    </div>
    <div class="tabs-content">
        {#each nonEmptyTabs as tab (tab.language)}
            <div class="tab-item" class:active={activeLanguage === tab.language}>
                <CodeBlock language={tab.language} content={tab.content} />
            </div>
        {/each}
    </div>
</div>
