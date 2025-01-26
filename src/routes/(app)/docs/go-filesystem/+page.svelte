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
    <a
        href="{import.meta.env.PB_GODOC_URL}/core#BaseApp.NewFilesystem"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.NewFilesystem()</code>
    </a>
    method.
</p>
<p>
    Below are listed some of the most common operations but you can find more details in the
    <a href="{import.meta.env.PB_GODOC_URL}/tools/filesystem" target="_blank" rel="noopener noreferrer">
        <code>filesystem</code>
    </a>
    subpackage.
</p>

<div class="alert alert-warning">
    <div class="icon">
        <i class="ri-error-warning-line" />
    </div>
    <div class="content">
        <p>
            Always make sure to call <code>Close()</code> at the end for both the created filesystem instance and
            the retrieved file readers to prevent leaking resources.
        </p>
    </div>
</div>

<Toc />

<HeadingLink title="Reading files" />
<p>
    To retrieve the file content of a single stored file you can use
    <a
        href="{import.meta.env.PB_GODOC_URL}/tools/filesystem#System.GetFile"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>GetFile(key)</code>
    </a>
    .
    <br />
    Note that file keys often contain a <strong>prefix</strong> (aka. the "path" to the file). For record
    files the full key is
    <code>collectionId/recordId/filename</code>.
    <br />
    To retrieve multiple files matching a specific <em>prefix</em> you can use
    <a
        href="{import.meta.env.PB_GODOC_URL}/tools/filesystem#System.List"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>List(prefix)</code>
    </a>
    .
</p>
<p>
    The below code shows a minimal example how to retrieve a single record file and copy its content into a
    <code>bytes.Buffer</code>.
</p>
<CodeBlock
    language="go"
    content={`
        record, err := app.FindAuthRecordByEmail("users", "test@example.com")
        if err != nil {
            return err
        }

        // construct the full file key by concatenating the record storage path with the specific filename
        avatarKey := record.BaseFilesPath() + "/" + record.GetString("avatar")

        // initialize the filesystem
        fsys, err := app.NewFilesystem()
        if err != nil {
            return err
        }
        defer fsys.Close()

        // retrieve a file reader for the avatar key
        r, err := fsys.GetFile(avatarKey)
        if err != nil {
            return err
        }
        defer r.Close()

        // do something with the reader...
        content := new(bytes.Buffer)
        _, err = io.Copy(content, r)
        if err != nil {
            return err
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
        <a
            href="{import.meta.env.PB_GODOC_URL}/tools/filesystem#System.Upload"
            target="_blank"
            rel="noopener noreferrer"
        >
            <code>Upload([]byte, key)</code>
        </a>
    </li>
    <li>
        <a
            href="{import.meta.env.PB_GODOC_URL}/tools/filesystem#System.UploadFile"
            target="_blank"
            rel="noopener noreferrer"
        >
            <code>UploadFile(*filesystem.File, key)</code>
        </a>
    </li>
    <li>
        <a
            href="{import.meta.env.PB_GODOC_URL}/tools/filesystem#System.UploadFile"
            target="_blank"
            rel="noopener noreferrer"
        >
            <code>UploadMultipart(*multipart.FileHeader, key)</code>
        </a>
    </li>
</ul>
<p>
    Most users rarely will have to use the above methods directly because for collection records the file
    persistence is handled transparently when saving the record model (it will also perform size and MIME type
    validation based on the collection <code>file</code> field options). For example:
</p>
<CodeBlock
    language="go"
    content={`
        record, err := app.FindRecordById("articles", "RECORD_ID")
        if err != nil {
            return err
        }

        // Other available File factories
        // - filesystem.NewFileFromBytes(data, name)
        // - filesystem.NewFileFromURL(ctx, url)
        // - filesystem.NewFileFromMultipart(mh)
        f, err := filesystem.NewFileFromPath("/local/path/to/file")

        // set new file (can be single *filesytem.File or multiple []*filesystem.File)
        // (if the record has an old file it is automatically deleted on successful Save)
        record.Set("yourFileField", f)

        err = app.Save(record)
        if err != nil {
            return err
        }
    `}
/>

<HeadingLink title="Deleting files" />
<p>
    Files can be deleted from the storage filesystem using
    <a
        href="{import.meta.env.PB_GODOC_URL}/tools/filesystem#System.Delete"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>Delete(key)</code>
    </a>
    .
</p>
<p>
    Similar to the previous section, most users rarely will have to use the <code>Delete</code> file method directly
    because for collection records the file deletion is handled transparently when removing the existing filename
    from the record model (this also ensure that the db entry referencing the file is also removed). For example:
</p>
<CodeBlock
    language="go"
    content={`
        record, err := app.FindRecordById("articles", "RECORD_ID")
        if err != nil {
            return err
        }

        // if you want to "reset" a file field (aka. deleting the associated single or multiple files)
        // you can set it to nil
        record.Set("yourFileField", nil)

        // OR if you just want to remove individual file(s) from a multiple file field you can use the "-" modifier
        // (the value could be a single filename string or slice of filename strings)
        record.Set("yourFileField-", "example_52iWbGinWd.txt")

        err = app.Save(record)
        if err != nil {
            return err
        }
    `}
/>
