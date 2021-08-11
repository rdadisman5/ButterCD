<template>
<div class="max-w-2xl mx-auto">
    <div
        class="prose"
        v-html="content"
    ></div>
</div>
</template>


<script>
import { defineComponent } from "vue"

export default defineComponent({
    name: "PostBody",
    props: {
        content: {
            type: String,
            default: "",
        },
    },
})
</script>