<template>
<layout>
    <article v-if="loaded">
        <post-header
            :title="post.data.title"
            :cover-image="post.data.featured_image"
            :date="post.data.published"
            :author="post.data.author"
            :categories="post.data.categories"
        ></post-header>

        <post-body :content="post.data.body"></post-body>

        <div
            v-if="post.meta.previous_post || post.meta.next_post"
            class="my-2 flex justify-between"
        >
            <router-link
                v-if="post.meta.previous_post"
                :to="{
                    name: 'BlogPost',
                    params: { slug: post.meta.previous_post.slug },
                }"
            >
                {{ post.meta.previous_post.title }}
            </router-link>

            <router-link
                :to="{
                    name: 'BlogPost',
                    params: { slug: post.meta.next_post.slug },
                }"
                v-if="post.meta.next_post"
            >
                {{ post.meta.next_post.title }}
            </router-link>
        </div>
    </article>
</layout>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue"
import { RouterLink, useRoute } from "vue-router"

import { butter } from "@/buttercms.js"
import PostHeader from "@/components/PostHeader.vue"
import PostBody from "@/components/PostBody.vue"
import Layout from "@/components/Layout.vue"

export default defineComponent({
    name: "BlogPost",
    components: {
        Layout,
        PostBody,
        PostHeader,
        RouterLink,
    },
    setup () {
        const post = ref([])
        const loaded = ref( false )
        const route = useRoute()

        onMounted( () => getPost( route.params.slug ) )

        watch( () => route.params.slug, ( postSlug ) => getPost( postSlug ) )

        async function getPost ( postSlug ) {
            loaded.value = false
            post.value = (
                await butter.post.retrieve( postSlug )
            ).data
            document.title = post.value.data.title
            loaded.value = true
        }

        return {
            loaded,
            post,
        }
    },
})
</script>
