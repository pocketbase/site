<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import ThumbFormats from "@/components/ThumbFormats.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<Toc />

<HeadingLink title="Uploading files" />
<p>
    To upload files, you must first add a <code>file</code> field to your collection:
</p>
<img src="/images/screenshots/file-field.png" alt="File field screenshot" width="500" class="screenshot" />
<p>
    Once added, you could create/update a Record and upload "documents" files by sending a
    <code>multipart/form-data</code> request using the <em>Records create/update APIs</em>.
</p>
<p>
    The client SDK makes things a little easier and auto detect the request content type based on the
    parameters that you provide. Here is an example how to create a new Record and upload multiple files to
    the example file field "documents" using the SDKs:
</p>
<!-- prettier-ignore -->
<SdkTabs
    js={`
        // Example HTML:
        // <input type="file" id="fileInput" />

        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        const formData = new FormData();

        const fileInput = document.getElementById('fileInput');

        // listen to file input changes and add the selected files to the form data
        fileInput.addEventListener('change', function () {
            for (let file of fileInput.files) {
                formData.append('documents', file);
            }
        });

        // set some other regular text field value
        formData.append('title', 'Hello world!');

        ...

        // upload and create new record
        const createdRecord = await pb.collection('example').create(formData);
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:http/http.dart' as http;

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // create a new record and upload multiple files
        final record = await pb.collection('example').create(
            body: {
                'title': 'Hello world!', // some regular text field
            },
            files: [
                http.MultipartFile.fromString(
                    'document',
                    'example content 1...',
                    filename: 'file1.txt',
                ),
                http.MultipartFile.fromString(
                    'document',
                    'example content 2...',
                    filename: 'file2.txt',
                ),
            ],
        );
    `}
/>

<div class="alert alert-info m-t-10 m-b-10">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            Each uploaded file will be stored with the original filename (sanitized) and suffixed with a
            random (10 chars) part (eg. <code>test_52iWbGinWd.png</code>).
        </p>
        <p>
            When you upload a new file to a <strong>single file upload field</strong> (aka.
            <strong>Max Files option is 1</strong>) PocketBase will automatically delete the previous uploaded
            file (if any) and upload the new one in its place.
        </p>
        <p>
            When you upload a new file to a <strong>multiple file upload field</strong> (aka.
            <strong>Max Files option is > 1</strong>) the new file will be appended to the existing field
            values (as long as the <strong>Max Files</strong> limit is not reached, otherwise an error will be
            thrown).
        </p>
    </div>
</div>

<HeadingLink title="Deleting files" />
<p>
    To delete uploaded file(s), you could either edit the Record from the admin UI, or use the API and set the
    file field to a zero-value <br /> (<code>null</code>, <code>[]</code>, empty string, etc.).
</p>
<p>
    If you want to <strong>delete only a single file from a multiple file upload field</strong>, you could
    suffix the field name with <code>-</code> and filename(s) you want to delete. Here are some examples using
    the SDKs:
</p>
<!-- prettier-ignore -->
<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        // delete all "documents" files
        await pb.collection('example').update('RECORD_ID', {
            'documents': null,
        });

        // delete individual files
        await pb.collection('example').update('RECORD_ID', {
            'documents-': ["file1.pdf", "file2.txt"],
        });
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // delete all "documents" files
        await pb.collection('example').update('RECORD_ID', body: {
            'documents': null,
        });

        // delete individual files
        await pb.collection('example').update('RECORD_ID', body: {
            'documents-': ["file1.pdf", "file2.txt"],
        });
    `}
/>

<p>
    The above examples use the JSON object data format, but you could also use <code>FormData</code> instance
    for <em>multipart/form-data</em> requests. If using
    <code>FormData</code> set the file field to an empty string.
</p>

<HeadingLink title="File URL" />
<p>
    Each uploaded file could be accessed by requesting its file url:
    <br />
    <!-- prettier-ignore -->
    <code class="txt-bold">
        http://127.0.0.1:8090/api/files/<span class="txt-danger">COLLECTION_ID_OR_NAME</span>/<span class="txt-info">RECORD_ID</span>/<span class="txt-success">FILENAME</span>
    </code>
</p>
<p>
    If your file field has the <strong>Thumb sizes</strong> option, you can get a thumb of the image file
    (currently limited to jpg, png, and partially gif – its first frame) by adding the <code>thumb</code>
    query parameter to the url like this:
    <!-- prettier-ignore -->
    <code>
        http://127.0.0.1:8090/api/files/<span class="txt-danger">COLLECTION_ID_OR_NAME</span>/<span class="txt-info">RECORD_ID</span>/<span class="txt-success">FILENAME</span><strong>?thumb=100x300</strong>
    </code>
</p>

<ThumbFormats />
<p class="txt-hint">
    The original file would be returned, if the requested thumb size is not found or the file is not an image!
</p>

<p>
    If you already have a Record model instance, the SDKs provide a convenient method to generate a file url
    by its name.
</p>

<!-- prettier-ignore -->
<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        const record = await pb.collection('example').getOne('RECORD_ID');

        // get only the first filename from "documents"
        //
        // note:
        // "documents" is an array of filenames because
        // the "documents" field was created with "Max Files" option > 1;
        // if "Max Files" was 1, then the result property would be just a string
        const firstFilename = record.documents[0];

        // returns something like:
        // http://127.0.0.1:8090/api/files/example/kfzjt5oy8r34hvn/test_52iWbGinWd.png?thumb=100x250
        const url = pb.files.getUrl(record, firstFilename, {'thumb': '100x250'});
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        final record = await pb.collection('example').getOne('RECORD_ID');

        // get only the first filename from "documents"
        //
        // note:
        // "documents" is an array of filenames because
        // the "documents" field was created with "Max Files" option > 1;
        // if "Max Files" was 1, then the result property would be just a string
        final firstFilename = record.getListValue<String>('documents')[0];

        // returns something like:
        // http://127.0.0.1:8090/api/files/example/kfzjt5oy8r34hvn/test_52iWbGinWd.png?thumb=100x250
        final url = pb.files.getUrl(record, firstFilename, thumb: '100x250');
    `}
/>

<HeadingLink title="Protected files" />
<p>By default all files are public accessible if you know their full url.</p>
<p>
    For most applications this is fine since all files have a random part, but in some cases you may want an
    extra security to prevent unauthorized access to sensitive files like ID card or Passport copies,
    contracts, etc.
</p>
<p>
    To do this you can mark the <code>file</code> field as <em>Protected</em> and then request the file with a
    special <strong>short-lived file token</strong>.
</p>
<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            Only requests that satisfy the <strong>View API rule</strong> of the record collection will be able
            to access or download the protected file(s).
        </p>
    </div>
</div>
<img src="/images/screenshots/file-options.png" alt="File options panel" class="screenshot" />
<div class="clearfix m-b-sm" />
<!-- prettier-ignore -->
<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        // authenticate
        await pb.collection('users').authWithPassword('test@example.com', '1234567890');

        // generate a file token
        const fileToken = await pb.files.getToken();

        // retrieve an example protected file url (will be valid ~5min)
        const record = await pb.collection('example').getOne('RECORD_ID');
        const url = pb.files.getUrl(record, record.myPrivateFile, {'token': fileToken});
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // authenticate
        await pb.collection('users').authWithPassword('test@example.com', '1234567890');

        // generate a file token
        final fileToken = await pb.files.getToken();

        // retrieve an example protected file url (will be valid ~5min)
        final record = await pb.collection('example').getOne('RECORD_ID');
        final url = pb.files.getUrl(record, record.getStringValue('myPrivateFile'), token: fileToken);
    `}
/>

<HeadingLink title="Storage options" />
<p>
    By default PocketBase uses the local file system to store uploaded files (in the
    <code>pb_data/storage</code> directory).
</p>
<p>
    If you have limited disk space, you could use a S3 compatible storage (AWS S3, MinIO, Wasabi, DigitalOcean
    Spaces, Vultr Object Storage, etc.). The easiest way to setup the connection settings is from the admin UI
    (<em>Settings</em> > <em>Files storage</em>):
</p>
<img src="/images/screenshots/files-storage.png" alt="Files storage settings screenshot" class="screenshot" />
