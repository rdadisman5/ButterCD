<template>
<div>
    <post-title>{{ title }}</post-title>
    <div class="hidden md:block md:mb-12">
        <avatar
            v-if="author.profile_image"
            :name="authorFullName"
            :picture="author.profile_image"
        ></avatar>
    </div>
    <div
        v-if="coverImage"
        class="mb-8 md:mb-16 sm:mx-0"
    >
        <cover-image
            :title="title"
            :url="coverImage"
        ></cover-image>
    </div>
    <div class="max-w-2xl mx-auto">
        <div class="block md:hidden mb-6">
            <avatar
                v-if="author.profile_image"
                :name="authorFullName"
                :picture="author.profile_image"
            ></avatar>
        </div>
        <div class="mb-6 text-lg">
            <router-link
                class="mr-2 hover:underline leading-snug"
                v-for="category in categories"
                :key="category.slug"
                :to="{
                    name: 'BlogPostCategory',
                    params: { slug: category.slug },
                }"
            >
                {{ category.name }}
            </router-link>
        </div>
        <div class="mb-6 text-lg">
            <human-date :date-string="date"></human-date>
        </div>
    </div>
</div>
</template>


<script>
import { computed, defineComponent } from "vue"
import { RouterLink } from "vue-router"

import HumanDate from "./HumanDate.vue"
import Avatar from "./Avatar.vue"
import CoverImage from "./CoverImage.vue"
import PostTitle from "./PostTitle.vue"

export default defineComponent({
    name: "PostHeader",
    components: {
        Avatar,
        CoverImage,
        HumanDate,
        PostTitle,
        RouterLink
    },
    props: {
        author: {
            type: Object,
            default: () => ({}),
        },
        categories: {
            type: Array,
            default: () => [],
        },
        coverImage: {
            type: String,
            default: "",
        },
        date: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
    },
    setup ( props ) {
        const authorFullName = computed(
            () => `${ props.author.first_name } ${ props.author.last_name }`
        )

        return {
            authorFullName,
        }
    },
})
</script>