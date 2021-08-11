import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import FAQ from "@/views/FAQ.vue"
import CaseStudies from "@/views/CaseStudies.vue"
import CaseStudy from "@/views/CaseStudy.vue"
import Blog from "@/views/Blog.vue"
import BlogPost from "@/views/BlogPost.vue"
import Categories from "@/views/Categories.vue"
import Category from "@/views/Category.vue"
import Atom from "@/views/Atom.vue"
import Rss from "@/views/Rss.vue"
import Sitemap from "@/views/Sitemap.vue"

const routes = [
    {
        component: Home,
        meta: {
            metaTags: [
                {
                    content: "The home page of buttercms-vue-3-tutorial app",
                    name: "description",
                }
            ],
            title: "HomePage",
        },
        name: "Home",
        path: "/",
    },
    {
        component: FAQ,
        meta: {
            metaTags: [
                {
                    content: "FAQ fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "FAQ",
        },
        name: "FAQ",
        path: "/faq",
    },
    {
        component: CaseStudies,
        meta: {
            metaTags: [
                {
                    content: "Multiple pages with the same static template and content fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "Pages with types",
        },
        name: "CaseStudies",
        path: "/case-studies",
    },
    {
        component: CaseStudy,
        meta: {
            metaTags: [
                {
                    content: "Page with type with content fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "Page with type",
        },
        name: "CaseStudy",
        path: "/case-studies/:slug",
    },
    {
        component: Blog,
        meta: {
            metaTags: [
                {
                    content: "Blog posts fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "Blog",
        },
        name: "Blog",
        path: "/posts",
    },
    {
        component: BlogPost,
        meta: {
            metaTags: [
                {
                    content: "Blog post fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "Blog Post",
        },
        name: "BlogPost",
        path: "/posts/:slug",
    },
    {
        component: Categories,
        meta: {
            metaTags: [
                {
                    content: "Post categories fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "Post categories",
        },
        name: "BlogPostCategories",
        path: "/categories",
    },
    {
        component: Category,
        meta: {
            metaTags: [
                {
                    content: "Blog post categories fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "Blog Post category",
        },
        name: "BlogPostCategory",
        path: "/categories/:slug",
    },
    {
        component: Atom,
        meta: {
            metaTags: [
                {
                    content: "Atom fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "Atom",
        },
        name: "Atom",
        path: "/atom",
    },
    {
        component: Rss,
        meta: {
            metaTags: [
                {
                    content: "Rss fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "Rss",
        },
        name: "Rss",
        path: "/rss",
    },
    {
        component: Sitemap,
        meta: {
            metaTags: [
                {
                    content: "Sitemap fetched from ButterCMS",
                    name: "description",
                }
            ],
            title: "Sitemap",
        },
        name: "Sitemap",
        path: "/sitemap",
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// This callback runs before every route change, including on page load.
router.beforeEach( ( to, from, next ) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse()
        .find( ( r ) => r.meta && r.meta.title )

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse()
        .find( ( r ) => r.meta && r.meta.metaTags )

    const previousNearestWithMeta = from.matched.slice().reverse()
        .find( ( r ) => r.meta && r.meta.metaTags )

    // If a route with a title was found, set the document (page) title to that value.
    let title = "ButterCMS Vue 3 Tutorial"

    if ( nearestWithTitle ) {
        title = nearestWithTitle.meta.title
    }
    else if ( previousNearestWithMeta ) {
        title = previousNearestWithMeta.meta.title
    }
    document.title = title

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from( document.querySelectorAll( "[data-vue-router-controlled]" ) ).map( ( el ) => el.parentNode.removeChild( el ) )

    // Skip rendering meta tags if there are none.
    if ( !nearestWithMeta ) return next()

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map( ( tagDef ) => {
        const tag = document.createElement( "meta" )

        Object.keys( tagDef ).forEach( ( key ) => {
            tag.setAttribute( key, tagDef[key])
        })

        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute( "data-vue-router-controlled", "" )

        return tag
    })
    // Add the meta tags to the document head.
        .forEach( ( tag ) => document.head.appendChild( tag ) )

    next()
})


export default router