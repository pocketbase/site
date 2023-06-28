export const baseLinks = [
    {
        href: "/docs",
        title: "Introduction",
    },
    {
        href: "/docs/collections",
        title: "Collections",
    },
    {
        href: "/docs/api-rules-and-filters",
        title: "API rules and filters",
    },
    {
        href: "/docs/client-side-sdks",
        title: "Client-side SDKs",
    },
    {
        href: "/docs/authentication",
        title: "Authentication",
    },
    {
        href: "/docs/files-handling",
        title: "Files upload and handling",
    },
    {
        href: "/docs/expanding-relations",
        title: "Expanding relations",
    },
    {
        href: "/docs/extend-with-go-or-javascript",
        title: "Extend with Go or JavaScript",
    },
    {
        title: "Web APIs reference",
        href: "/docs/api-records",
        children: [
            {
                href: "/docs/api-records",
                title: "API Records",
            },
            {
                href: "/docs/api-realtime",
                title: "API Realtime",
            },
            {
                href: "/docs/api-files",
                title: "API Files",
            },
            {
                href: "/docs/api-admins",
                title: "API Admins",
            },
            {
                href: "/docs/api-collections",
                title: "API Collections",
            },
            {
                href: "/docs/api-settings",
                title: "API Settings",
            },
            {
                href: "/docs/api-logs",
                title: "API Logs",
            },
            {
                href: "/docs/api-backups",
                title: "API Backups",
            },
            {
                href: "/docs/api-health",
                title: "API Health",
            },
        ],
    },
    {
        href: "/docs/going-to-production",
        title: "Going to production",
    },
];

export const goLinks = [
    {
        href: "/docs/use-as-framework",
        title: "Use as framework",
    },
    {
        href: "/docs/event-hooks",
        title: "Event hooks",
    },
    {
        href: "/docs/router",
        title: "Router",
    },
    {
        href: "/docs/database",
        title: "Database",
    },
    {
        href: "/docs/collection-methods",
        title: "Collection methods",
    },
    {
        href: "/docs/record-methods",
        title: "Record methods",
    },
    {
        href: "/docs/custom-models",
        title: "Custom models",
    },
    {
        href: "/docs/sending-emails",
        title: "Sending emails",
    },
    {
        href: "/docs/migrations",
        title: "Migrations",
    },
    {
        href: "/docs/testing",
        title: "Testing",
    },
];

export const jsLinks = [
    {
        href: "/docs/js-overview",
        title: "Overview",
    },
    {
        href: "/docs/js-event-hooks",
        title: "Event hooks",
    },
    {
        href: "/docs/js-routing",
        title: "Routing",
    },
    {
        href: "/docs/js-database",
        title: "Database",
    },
    {
        href: "/docs/js-records",
        title: "Record operations",
    },
    {
        href: "/docs/js-collections",
        title: "Collection operations",
    },
    {
        href: "/docs/js-migrations",
        title: "Migrations",
    },
    {
        href: "/docs/js-sending-emails",
        title: "Sending emails",
    },
    {
        href: "/docs/js-sending-http-requests",
        title: "Sending HTTP requests",
    },
    {
        href:   "/jsvm/index.html",
        target: "_blank",
        title:  "Types reference",
    },
];



export function hasPath(path, links = []) {
    if (!links) {
        return false;
    }

    for (let link of links) {
        if (
            equalPaths(path, link.href) ||
            hasPath(path, link.children)
        ) {
            return true;
        }
    }

    return false;
}

export function equalPaths(pathA, pathB) {
    return trimTrailingSlash(pathA) == trimTrailingSlash(pathB);
}

function trimTrailingSlash(url) {
    if (!url) {
        return "";
    }

    return url.endsWith("/") ? url.slice(0, -1) : url;
}
