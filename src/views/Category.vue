<template>
<layout>
    <article v-if="loaded">
        <header-element
            :title="`Blog posts with category '${category.name}'`"
        ></header-element>

        <div
            class="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-10"
        >
            <post-preview
                v-for="post in category.recent_posts"
                :key="post.slug"
                :title="post.title"
                :cover-image="post.featured_image"
                :date="post.published"
                :author="post.author"
                :slug="post.slug"
                :excerpt="post.summary"
            ></post-preview>
        </div>
    </article>
</layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"
import { useRoute } from "vue-router"

import { butter } from "@/buttercms.js"
import PostPreview from "@/components/PostPreview.vue"
import HeaderElement from "@/components/HeaderElement.vue"
import Layout from "@/components/Layout.vue"

export default defineComponent({
    name: "Category",
    components: {
        HeaderElement,
        Layout,
        PostPreview,
    },
    setup () {
        const category = ref([])
        const loaded = ref( false )
        const route = useRoute()

        onMounted( async () => {
            category.value = (
                await butter.category.retrieve( route.params.slug, {
                    include: "recent_posts",
                })
            ).data.data
            document.title = category.value.name
            loaded.value = true
        })

        return {
            category,
            loaded,
        }
    },
})
</script>
