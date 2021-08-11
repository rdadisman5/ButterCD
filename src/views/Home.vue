<template>
<layout>
    <header-element
        title="ButterCMS. Headless CMS you'll melt over"
    ></header-element>
    <div class="bg-gray-50 mb-5 rounded-lg">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6">
            <h2
                class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:mr-5"
            >
                <span class="block">Blog Engine</span>
                <span class="block text-indigo-600">
                    You've got better things to do than building another
                    blog.
                </span>
            </h2>
            <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                    <router-link
                        to="/posts"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Preview integration
                    </router-link>
                </div>
                <div class="ml-3 inline-flex rounded-md shadow">
                    <a
                        href="https://buttercms.com/features/#flexiblecontentmodeling-blog-engine"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-gray-50 mb-5 rounded-lg">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6">
            <h2
                class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:mr-5"
            >
                <span class="block">Pages</span>
                <span class="block text-indigo-600">
                    Build SEO landing pages, knowledge base, news articles,
                    and more by using Page Types.
                </span>
            </h2>
            <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                    <router-link
                        to="/case-studies"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Preview integration
                    </router-link>
                </div>
                <div class="ml-3 inline-flex rounded-md shadow">
                    <a
                        href="https://buttercms.com/features/#flexiblecontentmodeling-page-types"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-gray-50 mb-5 rounded-lg">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6">
            <h2
                class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:mr-5"
            >
                <span class="block">Collections</span>
                <span class="block text-indigo-600">
                    Create reusable promotional content and more with
                    Collections.
                </span>
            </h2>
            <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                    <router-link
                        to="/faq"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Preview integration
                    </router-link>
                </div>
                <div class="ml-3 inline-flex rounded-md shadow">
                    <a
                        href="https://buttercms.com/features/#flexiblecontentmodeling-collections"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    </div>

    <router-view></router-view>
</layout>
</template>

<script>
import { defineComponent } from "vue"
import { RouterLink, RouterView } from "vue-router"
import HeaderElement from "@/components/HeaderElement.vue"
import Layout from "@/components/Layout.vue"

export default defineComponent({
    name: "Home",
    components: {
        HeaderElement,
        Layout,
        RouterLink,
        RouterView
    },
})
</script>