<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
    import Toc from "@/components/Toc.svelte";
    import CommonHelper from "@/utils/CommonHelper";
</script>

<Toc />

<HeadingLink title="app.Store()" />
<p>
    <a href="{import.meta.env.PB_GODOC_URL}/core#BaseApp.Store" target="_blank" rel="noopener noreferrer">
        <code>app.Store()</code>
    </a>
    returns a concurrent-safe application memory store that you can use to store anything for the duration of the
    application process (e.g. cache, config flags, etc.).
</p>
<p>
    You can find more details about the available store methods in the
    <a href="{import.meta.env.PB_GODOC_URL}/tools/store#Store" target="_blank" rel="noopener noreferrer">
        <code>store.Store</code>
    </a>
    documentation but the most commonly used ones are <code>Get(key)</code>, <code>Set(key, value)</code> and
    <code>GetOrSet(key, setFunc)</code>.
</p>
<CodeBlock
    language="go"
    content={`
        app.Store().Set("example", 123)

        v1 := app.Store().Get("example").(int) // 123

        v2 := app.Store().GetOrSet("example2", func() any {
            // this setter is invoked only once unless "example2" is removed
            // (e.g. suitable for instantiating singletons)
            return 456
        }).(int) // 456
    `}
/>

<div class="alert alert-warning">
    <div class="icon">
        <i class="ri-error-warning-line" />
    </div>
    <div class="content">
        <p>
            Keep in mind that the application store is also used internally usually with <code>pb*</code>
            prefixed keys (e.g. the collections cache is stored under the <code>pbAppCachedCollections</code>
            key) and changing these system keys or calling <code>RemoveAll()</code>/<code>Reset()</code> could
            have unintended side-effects.
        </p>
        <p>
            If you want more advanced control you can initialize your own store independent from the
            application instance via
            <code>store.New[K, T](nil)</code>.
        </p>
    </div>
</div>

<HeadingLink title="Security helpers" />
<p>
    <em>
        Below are listed some of the most commonly used security helpers but you can find detailed
        documentation for all available methods in the
        <a href="{import.meta.env.PB_GODOC_URL}/tools/security" target="_blank" rel="noopener noreferrer">
            <code>security</code>
        </a>
        subpackage.
    </em>
</p>

<HeadingLink title="Generating random strings" tag="h5" />
<CodeBlock
    language="go"
    content={`
        secret := security.RandomString(10) // e.g. a35Vdb10Z4

        secret := security.RandomStringWithAlphabet(5, "1234567890") // e.g. 33215
    `}
/>

<HeadingLink title="Compare strings with constant time" tag="h5" />
<CodeBlock
    language="go"
    content={`
        isEqual := security.Equal(hash1, hash2)
    `}
/>

<HeadingLink title="AES Encrypt/Decrypt" tag="h5" />
<CodeBlock
    language="go"
    content={`
        // must be random 32 characters string
        const key = "` +
        CommonHelper.randomString(32) +
        `"

        encrypted, err := security.Encrypt([]byte("test"), key)
        if err != nil {
            return err
        }

        decrypted := security.Decrypt(encrypted, key) // []byte("test")
    `}
/>
