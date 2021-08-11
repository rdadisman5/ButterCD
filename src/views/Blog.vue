<template>
<layout>
    <header-element title="Blog"></header-element>
    <div
        v-if="loaded"
        class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 gap-y-10 md:gap-y-16"
    >
        <post-preview
            v-for="post in posts"
            :key="post.slug"
            :title="post.title"
            :cover-image="post.featured_image"
            :date="post.published"
            :author="post.author"
            :slug="post.slug"
            :excerpt="post.summary"
        ></post-preview>
    </div>
    <div
        v-if="prevPage || nextPage"
        class="text-right mb-10"
    >
        <nav
            class="relative z-0 inline-flex shadow-sm -space-x-px"
            aria-label="Pagination"
        >
            <router-link
                v-if="prevPage"
                :to="{ name: 'Blog', query: { page: prevPage } }"
            >
                <a
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span class="sr-only">Previous</span>
                    <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </router-link>

            <router-link
                v-if="nextPage"
                :to="{ name: 'Blog', query: { page: nextPage } }"
            >
                <a
                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span class="sr-only">Next</span>
                    <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </router-link>
        </nav>
    </div>
</layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"
import { useRoute, RouterLink } from "vue-router"

import { butter } from "@/buttercms.js"
import HeaderElement from "@/components/HeaderElement.vue"
import PostPreview from "@/components/PostPreview.vue"
import Layout from "@/components/Layout.vue"

export default defineComponent({
    name: "Blog",
    components: {
        HeaderElement,
        Layout,
        PostPreview,
        RouterLink
    },
    setup () {
        const posts = ref([])
        const prevPage = ref( 0 )
        const nextPage = ref( 0 )
        const route = useRoute()
        const loaded = ref( false )

        onMounted( async () => {
            const response = (
                await butter.post.list({
                    page: route.query.page || 1,
                    page_size: 10,
                })
            ).data
            posts.value = response.data
            prevPage.value = response.meta.previous_page
            nextPage.value = response.meta.next_page
            loaded.value = true
        })

        return {
            loaded,
            nextPage,
            posts,
            prevPage,
        }
    },
})
</script>
