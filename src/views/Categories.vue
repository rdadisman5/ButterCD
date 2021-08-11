<template>
<layout>
    <header-element title="Posts categories"></header-element>
    <ul>
        <li
            v-for="category in categories"
            :key="category.slug"
            class="mb-5"
        >
            <router-link
                class-name="text-lg leading-6 font-medium hover:underline"
                :to="{
                    name: 'BlogPostCategory',
                    params: { slug: category.slug },
                }"
            >
                {{ category.name }}
            </router-link>
        </li>
    </ul>
</layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"
import { RouterLink } from "vue-router"

import { butter } from "@/buttercms.js"
import HeaderElement from "@/components/HeaderElement.vue"
import Layout from "@/components/Layout.vue"

export default defineComponent({
    name: "Categories",
    components: {
        HeaderElement,
        Layout,
        RouterLink
    },
    setup () {
        const categories = ref([])
        const loaded = ref( false )

        onMounted( async () => {
            categories.value = ( await butter.category.list() ).data.data
            loaded.value = true
        })

        return {
            categories,
            loaded,
        }
    },
})
</script>
