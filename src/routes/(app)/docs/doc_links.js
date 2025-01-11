export const introductionLinks = [
    {
        href: "/docs",
        title: "Introduction",
        icon: "ri-home-2-line",
        children: [
            {
                href: "/docs/how-to-use",
                title: "How to use PocketBase",
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
                href: "/docs/authentication",
                title: "Authentication",
            },
            {
                href: "/docs/files-handling",
                title: "Files upload and handling",
            },
            {
                href: "/docs/working-with-relations",
                title: "Working with relations",
            },
            {
                href: "/docs/use-as-framework",
                title: "Extending PocketBase",
            },
        ]
    },
]

export const webApiLinks = [
    {
        title: "Web APIs reference",
        href: "/docs/api-records",
        icon: "ri-file-list-2-line",
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
                href: "/docs/api-crons",
                title: "API Crons",
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
]

export const goingToProductionLinks = [
    {
        href: "/docs/going-to-production",
        title: "Going to production",
        icon: "ri-check-double-line",
    },
];

export const goLinks = [
    {
        href: "/docs/go-overview",
        title: "Overview",
    },
    {
        href: "/docs/go-event-hooks",
        title: "Event hooks",
    },
    {
        href: "/docs/go-routing",
        title: "Routing",
    },
    {
        href: "/docs/go-database",
        title: "Database",
    },
    {
        href: "/docs/go-records",
        title: "Record operations",
    },
    {
        href: "/docs/go-collections",
        title: "Collection operations",
    },
    {
        href: "/docs/go-migrations",
        title: "Migrations",
    },
    {
        href: "/docs/go-jobs-scheduling",
        title: "Jobs scheduling",
    },
    {
        href: "/docs/go-sending-emails",
        title: "Sending emails",
    },
    {
        href: "/docs/go-rendering-templates",
        title: "Rendering templates",
    },
    {
        href: "/docs/go-console-commands",
        title: "Console commands",
    },
    {
        href: "/docs/go-realtime",
        title: "Realtime messaging",
    },
    {
        href: "/docs/go-filesystem",
        title: "Filesystem",
    },
    {
        href: "/docs/go-logging",
        title: "Logging",
    },
    {
        href: "/docs/go-testing",
        title: "Testing",
    },
    {
        href: "/docs/go-miscellaneous",
        title: "Miscellaneous",
    },
    {
        href: "/docs/go-record-proxy",
        title: "Record proxy",
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
        href: "/docs/js-jobs-scheduling",
        title: "Jobs scheduling",
    },
    {
        href: "/docs/js-sending-emails",
        title: "Sending emails",
    },
    {
        href: "/docs/js-rendering-templates",
        title: "Rendering templates",
    },
    {
        href: "/docs/js-console-commands",
        title: "Console commands",
    },
    {
        href: "/docs/js-sending-http-requests",
        title: "Sending HTTP requests",
    },
    {
        href: "/docs/js-realtime",
        title: "Realtime messaging",
    },
    {
        href: "/docs/js-filesystem",
        title: "Filesystem",
    },
    {
        href: "/docs/js-logging",
        title: "Logging",
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
