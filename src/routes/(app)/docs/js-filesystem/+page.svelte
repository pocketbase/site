<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>PocketBase comes with a thin abstraction between the local filesystem and S3.</p>
<p>
    To configure which one will be used you can adjust the storage settings from
    <em>Dashboard > Settings > Files storage</em> section.
</p>
<p>
    The filesystem abstraction can be accessed programmatically via the
    <a href="/jsvm/functions/_app.newFilesystem.html" target="_blank" rel="noopener noreferrer">
        <code>$app.newFilesystem()</code>
    </a>
    method.
</p>
<p>
    Below are listed some of the most common operations but you can find more details in the
    <a href="/jsvm/interfaces/filesystem.System.html" target="_blank" rel="noopener noreferrer">
        <code>filesystem.System</code>
    </a>
    interface.
</p>

<div class="alert alert-warning">
    <div class="icon">
        <i class="ri-error-warning-line" />
    </div>
    <div class="content">
        <p>
            Always make sure to call <code>close()</code> at the end for both the created filesystem instance and
            the retrieved file readers to prevent leaking resources.
        </p>
    </div>
</div>

<Toc />

<HeadingLink title="Reading files" />
<p>
    To retrieve the file content of a single stored file you can use
    <a href="/jsvm/interfaces/filesystem.System.html#getFile" target="_blank" rel="noopener noreferrer">
        <code>getFile(key)</code>
    </a>
    .
    <br />
    Note that file keys often contain a <strong>prefix</strong> (aka. the "path" to the file). For record
    files the full key is
    <code>collectionId/recordId/filename</code>.
    <br />
    To retrieve multiple files matching a specific <em>prefix</em> you can use
    <a href="/jsvm/interfaces/filesystem.System.html#list" target="_blank" rel="noopener noreferrer">
        <code>list(prefix)</code>
    </a>
    .
</p>
<p>The below code shows a minimal example how to retrieve the content of a single record file as string.</p>
<CodeBlock
    language="javascript"
    content={`
        let record = $app.findAuthRecordByEmail("users", "test@example.com")

        // construct the full file key by concatenating the record storage path with the specific filename
        let avatarKey = record.baseFilesPath() + "/" + record.get("avatar")

        let fsys, file, content;

        try {
            // initialize the filesystem
            fsys = $app.newFilesystem();

            // retrieve a file reader for the avatar key
            file = fsys.getFile(avatarKey)

            // copy as plain string
            content = toString(file)
        } finally {
            file?.close();
            fsys?.close();
        }
    `}
/>

<HeadingLink title="Saving files" />
<p>
    There are several methods to save <em>(aka. write/upload)</em> files depending on the available file content
    source:
</p>
<ul>
    <li>
        <a href="/jsvm/interfaces/filesystem.System.html#upload" target="_blank" rel="noopener noreferrer">
            <code>upload(content, key)</code>
        </a>
    </li>
    <li>
        <a
            href="/jsvm/interfaces/filesystem.System.html#uploadFile"
            target="_blank"
            rel="noopener noreferrer"
        >
            <code>uploadFile(file, key)</code>
        </a>
    </li>
    <li>
        <a
            href="/jsvm/interfaces/filesystem.System.html#uploadMultipart"
            target="_blank"
            rel="noopener noreferrer"
        >
            <code>uploadMultipart(mfh, key)</code>
        </a>
    </li>
</ul>
<p>
    Most users rarely will have to use the above methods directly because for collection records the file
    persistence is handled transparently when saving the record model (it will also perform size and MIME type
    validation based on the collection <code>file</code> field options). For example:
</p>
<CodeBlock
    language="javascript"
    content={`
        let record = $app.findRecordById("articles", "RECORD_ID")

        // Other available File factories
        // - $filesystem.fileFromBytes(content, name)
        // - $filesystem.fileFromURL(url)
        // - $filesystem.fileFromMultipart(mfh)
        let file = $filesystem.fileFromPath("/local/path/to/file")

        // set new file (can be single or array of File values)
        // (if the record has an old file it is automatically deleted on successful save)
        record.set("yourFileField", file)

        $app.save(record)
    `}
/>

<HeadingLink title="Deleting files" />
<p>
    Files can be deleted from the storage filesystem using
    <a href="/jsvm/interfaces/filesystem.System.html#delete" target="_blank" rel="noopener noreferrer">
        <code>delete(key)</code>
    </a>
    .
</p>
<p>
    Similar to the previous section, most users rarely will have to use the <code>delete</code> file method directly
    because for collection records the file deletion is handled transparently when removing the existing filename
    from the record model (this also ensure that the db entry referencing the file is also removed). For example:
</p>
<CodeBlock
    language="javascript"
    content={`
        let record = $app.findRecordById("articles", "RECORD_ID")

        // if you want to "reset" a file field (aka. deleting the associated single or multiple files)
        // you can set it to null
        record.set("yourFileField", null)

        // OR if you just want to remove individual file(s) from a multiple file field you can use the "-" modifier
        // (the value could be a single filename string or slice of filename strings)
        record.set("yourFileField-", "example_52iWbGinWd.txt")

        $app.save(record)
    `}
/>
