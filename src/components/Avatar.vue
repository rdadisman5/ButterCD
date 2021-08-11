<template>
<div class="flex items-center">
    <div class="mr-4">
        <img
            v-if="picture"
            :src="picture"
            height="48"
            width="48"
            class="w-12 h-12 rounded-full grayscale object-cover"
            :alt="name"
        >
    </div>
    <div class="text-xl font-bold">
        {{ name }}
    </div>
</div>
</template>


<script>
import { defineComponent } from "vue"

export default defineComponent({
    name: "Avatar",
    props: {
        name: {
            type: String,
            default: ""
        },
        picture: {
            type: String,
            default: ""
        },
    },
})
</script>