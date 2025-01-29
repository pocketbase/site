export const indexExample = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OAuth2 links page</title>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js"></script>
</head>
<body>
    <ul id="list">
        <li>Loading OAuth2 providers...</li>
    </ul>

    <script type="module">
        import PocketBase from "https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@master/dist/pocketbase.es.mjs"

        const pb          = new PocketBase("http://127.0.0.1:8090");
        const redirectURL = "http://127.0.0.1:8090/redirect.html";

        const authMethods = await pb.collection("users").listAuthMethods();
        const providers   = authMethods.oauth2?.providers || [];
        const listItems   = [];

        for (const provider of providers) {
            const $li = $(\`<li><a>Login with \${provider.name}</a></li>\`);

            $li.find("a")
                .attr("href", provider.authURL + redirectURL)
                .data("provider", provider)
                .click(function () {
                    // store provider's data on click for verification in the redirect page
                    localStorage.setItem("provider", JSON.stringify($(this).data("provider")));
                });

            listItems.push($li);
        }

        $("#list").html(listItems.length ? listItems : "<li>No OAuth2 providers.</li>");
    </script>
</body>
</html>
`;

export const redirectExample = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>OAuth2 redirect page</title>
</head>
<body>
    <pre id="content">Authenticating...</pre>

    <script type="module">
        import PocketBase from "https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@master/dist/pocketbase.es.mjs"

        const pb          = new PocketBase("http://127.0.0.1:8090");
        const redirectURL = "http://127.0.0.1:8090/redirect.html";
        const contentEl   = document.getElementById("content");

        // parse the query parameters from the redirected url
        const params = (new URL(window.location)).searchParams;

        // load the previously stored provider's data
        const provider = JSON.parse(localStorage.getItem("provider"))

        // compare the redirect's state param and the stored provider's one
        if (provider.state !== params.get("state")) {
            contentEl.innerText = "State parameters don't match.";
        } else {
            // authenticate
            pb.collection("users").authWithOAuth2Code(
                provider.name,
                params.get("code"),
                provider.codeVerifier,
                redirectURL,
                // pass any optional user create data
                {
                    emailVisibility: false,
                }
            ).then((authData) => {
                contentEl.innerText = JSON.stringify(authData, null, 2);
            }).catch((err) => {
                contentEl.innerText = "Failed to exchange code.\\n" + err;
            });
        }
    </script>
</body>
</html>
`;
