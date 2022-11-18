export const indexExample = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OAuth2 links page</title>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"></script>
</head>
<body>
    <ul id="list">
        <li>Loading OAuth2 providers...</li>
    </ul>

    <script src="https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@master/dist/pocketbase.umd.js"></script>
    <script type="text/javascript">
        const pb = new PocketBase('http://127.0.0.1:8090');
        const redirectUrl = 'http://127.0.0.1:8090/redirect.html';

        async function loadLinks() {
            const authMethods = await pb.collection('users').listAuthMethods();
            const listItems = [];

            for (const provider of authMethods.authProviders) {
                const $li = $(\`<li><a>Login with \${provider.name}</a></li>\`);

                $li.find('a')
                    .attr('href', provider.authUrl + redirectUrl)
                    .data('provider', provider)
                    .click(function () {
                        // store provider's data on click for verification in the redirect page
                        localStorage.setItem('provider', JSON.stringify($(this).data('provider')));
                    });

                listItems.push($li);
            }

            $('#list').html(listItems.length ? listItems : '<li>No OAuth2 providers.</li>');
        }

        loadLinks();
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

    <script src="https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@master/dist/pocketbase.umd.js"></script>
    <script type="text/javascript">
        const pb = new PocketBase("http://127.0.0.1:8090");
        const redirectUrl = 'http://127.0.0.1:8090/redirect.html';

        // parse the query parameters from the redirected url
        const params = (new URL(window.location)).searchParams;

        // load the previously stored provider's data
        const provider = JSON.parse(localStorage.getItem('provider'))

        // compare the redirect's state param and the stored provider's one
        if (provider.state !== params.get('state')) {
            throw "State parameters don't match.";
        }

        // authenticate
        pb.collection('users').authWithOAuth2(
            provider.name,
            params.get('code'),
            provider.codeVerifier,
            redirectUrl,
            // pass optional user create data
            {
                emailVisibility: false,
            }
        ).then((authData) => {
            document.getElementById('content').innerText = JSON.stringify(authData, null, 2);
        }).catch((err) => {
            document.getElementById('content').innerText = "Failed to exchange code.\\n" + err;
        });
    </script>
</body>
</html>
`;
