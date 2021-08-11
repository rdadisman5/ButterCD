<template>
<div>
    <div class="mb-5">
        <cover-image
            v-if="coverImage"
            :slug="slug"
            :title="title"
            :url="coverImage"
        ></cover-image>
    </div>
    <h3 class="text-3xl mb-3 leading-snug">
        <router-link
            class="hover:underline"
            :to="{ name: 'BlogPost', params: { slug: slug } }"
        >
            {{ title }}
        </router-link>
    </h3>
    <div class="text-lg mb-4">
        <human-date :date-string="date"></human-date>
    </div>
    <p class="text-lg leading-relaxed mb-4">
        {{ excerpt }}
    </p>
    <avatar
        :name="authorFullName"
        :picture="author.profile_image"
    ></avatar>
</div>
</template>


<script>
import { computed, defineComponent } from "vue"
import { RouterLink } from "vue-router"

import Avatar from "./Avatar.vue"
import CoverImage from "./CoverImage.vue"
import HumanDate from "./HumanDate.vue"

export default defineComponent({
    name: "PostPreview",
    components: {
        Avatar,
        CoverImage,
        HumanDate,
        RouterLink
    },
    props: {
        author: {
            type: Object,
            default: () => ({}),
        },
        coverImage: {
            type: String,
            default: "",
        },
        date: {
            type: String,
            default: "",
        },
        excerpt: {
            type: String,
            default: "",
        },
        slug: {
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