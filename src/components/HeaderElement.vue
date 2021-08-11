<template>
<h2
    class="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight px-4 mb-20 mt-8"
>
    {{ title }}
</h2>
</template>


<script>
import { defineComponent } from "vue"

export default defineComponent({
    name: "HeaderElement",
    props: {
        title: {
            type: String,
            default: "",
        },
    },
})
</script>