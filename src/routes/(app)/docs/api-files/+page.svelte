<script>
    import Download from "./Download.svelte";
    import Token from "./Token.svelte";
</script>

<p>
    Files are uploaded, updated or deleted via the
    <a href="/docs/api-records">Records API</a>.
</p>

<p>
    The File API is usually used to fetch/download a file resource (with support for basic image
    manipulations, like generating thumbs).
</p>

<div class="clearfix m-t-base" />

<div class="accordions">
    <Download />
    <Token />
</div>
