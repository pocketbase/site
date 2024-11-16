<script>
    import { page } from "$app/stores";
    import { introductionLinks, webApiLinks, goingToProductionLinks, jsLinks, goLinks } from "./doc_links.js";

    let footerLinks = {};
    let groups = [introductionLinks, webApiLinks, goingToProductionLinks, jsLinks, goLinks];

    $: if ($page) {
        loadPrevAndNextLinks();
    }

    function trimTrailingSlash(url) {
        return url.endsWith("/") ? url.slice(0, -1) : url;
    }

    function flattenLinks(links) {
        let result = [];

        for (let link of links) {
            result.push(link);
            if (link.children?.length) {
                result = result.concat(flattenLinks(link.children));
            }
        }

        return result;
    }

    function loadPrevAndNextLinks() {
        let activePath = trimTrailingSlash($page?.url?.pathname || "");

        // reset
        footerLinks = {};

        for (const links of groups) {
            footerLinks = findPrevAndNextLinks(flattenLinks(links), activePath);
            if (footerLinks.prev || footerLinks.next) {
                return;
            }
        }
    }

    function findFirstDifferentLink(links, startFrom, excludeHref, backwards = false) {
        if (backwards) {
            for (let i = startFrom; i >= 0; i--) {
                if (links[i].href != excludeHref) {
                    return links[i];
                }
            }
        } else {
            for (let i = startFrom; i < links.length; i++) {
                if (links[i].href != excludeHref) {
                    return links[i];
                }
            }
        }

        return null;
    }

    function findPrevAndNextLinks(links, activePath) {
        for (let i = 0; i < links.length; i++) {
            if (!trimTrailingSlash(links[i].href).includes(activePath)) {
                continue;
            }

            let result = {};

            let prev = findFirstDifferentLink(links, i - 1, links[i].href, true);
            if (prev) {
                result.prev = prev;
            }

            let next = findFirstDifferentLink(links, i + 1, links[i].href);
            if (next) {
                result.next = next;
            }

            return result;
        }

        return {};
    }
</script>

{#if footerLinks.prev?.href || footerLinks.next?.href}
    <hr />
{/if}

<div class="docs-footer" data-pagefind-ignore>
    {#if footerLinks.prev?.href}
        <a href={footerLinks.prev.href} class="btn btn-secondary btn-prev">
            <i class="ri-arrow-left-line" />
            <span class="txt">Prev: {footerLinks.prev.title}</span>
        </a>
    {/if}

    {#if footerLinks.next?.href}
        <a href={footerLinks.next.href} class="btn btn-outline btn-expanded btn-next">
            <span class="txt">Next: {footerLinks.next.title}</span>
            <i class="ri-arrow-right-line" />
        </a>
    {/if}
</div>

<style>
    .docs-footer {
        display: flex;
        width: 100%;
        gap: var(--smSpacing);
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .btn-next {
        margin-left: auto;
    }
    @media only screen and (max-width: 550px) {
        .docs-footer .btn {
            width: 100%;
        }
    }
</style>
