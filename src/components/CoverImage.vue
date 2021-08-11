<template>
<div class="sm:mx-0">
    <template v-if="url && slug">
        <router-link
            class="hover:underline"
            :to="{ name: 'BlogPost', params: { slug: slug } }"
        >
            <div>
                <img
                    :alt="title"
                    :src="url"
                    class="rounded-lg"
                >
            </div>
        </router-link>
    </template>
    <template v-else>
        <div>
            <img
                :alt="title"
                :src="url"
                class="rounded-lg"
            >
        </div>
    </template>
</div>
</template>


<script>
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"

export default defineComponent({
    name: "CoverImage",
    components: {
        RouterLink
    },
    props: {
        slug: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
    }
})
</script>