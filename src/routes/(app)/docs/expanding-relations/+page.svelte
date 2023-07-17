<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<Toc />

<HeadingLink title="Overview" />

<p>
    PocketBase collections allow you to expand record relation fields directly in the returned response
    without making additional requests by just using the <code>expand</code> query parameter:
    <code>?expand=relField1,relField2.subRelField</code>
</p>

<div class="alert alert-info m-t-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            Only the relations that the request client can <strong>View</strong> (aka. satisfies the relation
            collection's <strong>View API Rule</strong>) will be expanded.
            <br />
            Nested relations are supported via dot-notation and up to 6-levels depth.
        </p>
    </div>
</div>

<p>
    <strong>For example, consider the following simple collections structure:</strong>
</p>

<div class="block m-t-sm m-b-sm txt-center">
    <img src="/images/screenshots/expand-diagram.png" alt="Expand diagram" />
</div>

<p>
    To list all <strong>comments</strong> with their <strong>user</strong> relation expanded, we can do the following:
</p>

<CodeBlock
    content={`
        // pb.collection("comments").getList(1, 30, { expand: "user" })
        GET /api/collections/comments/records?perPage=30&expand=user
    `}
/>

<div class="clearfix m-b-10" />

<CodeBlock
    content={`
    {
        "page": 1,
        "perPage": 30,
        "totalPages": 1,
        "totalItems": 20,
        "items": [
            {
                "id": "lmPJt4Z9CkLW36z",
                "collectionId": "BHKW36mJl3ZPt6z",
                "collectionName": "comments",
                "created": "2022-01-01 01:00:00.456Z",
                "updated": "2022-01-01 02:15:00.456Z",
                "post": "WyAw4bDrvws6gGl",
                "user": "FtHAW9feB5rze7D",
                "message": "Example message...",
                "expand": {
                    "user": {
                        "id": "FtHAW9feB5rze7D",
                        "collectionId": "srmAo0hLxEqYF7F",
                        "collectionName": "users",
                        "created": "2022-01-01 00:00:00.000Z",
                        "updated": "2022-01-01 00:00:00.000Z",
                        "username": "users54126",
                        "verified": false,
                        "emailVisibility": false,
                        "name": "John Doe"
                    }
                }
            },
            ...
        ]
    }
`}
/>

<HeadingLink title="Indirect expand" />

<p>
    We can also do <em>indirect expansions</em> - expand where the <code>relation</code> field is not in the main
    collection.
</p>

<p>
    The following notation is used: <code>?expand=referenceCollection(relField)[.*]</code>
</p>

<p>
    For example, to list all <strong>posts</strong> each with their <strong>comments</strong> and
    <strong>users</strong> expanded, we can do the following:
</p>

<CodeBlock
    content={`
        // pb.collection("posts").getList(1, 30, { expand: "comments(post).user" })
        GET /api/collections/posts/records?perPage=30&expand=comments(post).user
    `}
/>

<div class="clearfix m-b-10" />

<CodeBlock
    content={`
    {
        "page": 1,
        "perPage": 30,
        "totalPages": 2,
        "totalItems": 45,
        "items": [
            {
                "id": "WyAw4bDrvws6gGl",
                "collectionId": "1rAwHJatkTNCUIN",
                "collectionName": "posts",
                "created": "2022-01-01 01:00:00.456Z",
                "updated": "2022-01-01 02:15:00.456Z",
                "title": "Lorem ipsum dolor sit...",
                "expand": {
                    "comments(post)": [
                        {
                            "id": "lmPJt4Z9CkLW36z",
                            "collectionId": "BHKW36mJl3ZPt6z",
                            "collectionName": "comments",
                            "created": "2022-01-01 01:00:00.456Z",
                            "updated": "2022-01-01 02:15:00.456Z",
                            "post": "WyAw4bDrvws6gGl",
                            "user": "FtHAW9feB5rze7D",
                            "message": "Example message...",
                            "expand": {
                                "user": {
                                    "id": "FtHAW9feB5rze7D",
                                    "collectionId": "srmAo0hLxEqYF7F",
                                    "collectionName": "users",
                                    "created": "2022-01-01 00:00:00.000Z",
                                    "updated": "2022-01-01 00:00:00.000Z",
                                    "username": "users54126",
                                    "verified": false,
                                    "emailVisibility": false,
                                    "name": "John Doe"
                                }
                            }
                        },
                        ...
                    ]
                }
            },
            ...
        ]
    }
`}
/>

<div class="alert alert-info m-t-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>The indirect expand has some caveats:</p>
        <ul>
            <li>
                Currently only single <code>relation</code> fields can be indirect expanded (aka. when "Max Select"
                field option is 1).
            </li>
            <li>
                The "Unique" indirect <code>relation</code> field option is used to determine whether an array
                or a single object should be expanded.
            </li>
            <li>
                As a side effect of the nested indirect expansion support, referencing the root relation is
                also allowed, eg. <code>?expand=comments(post).post</code>.
            </li>
        </ul>
    </div>
</div>
