<template>
<h1
    class="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
>
    <slot></slot>
</h1>
</template>


<script>
import { defineComponent } from "vue"

export default defineComponent({
    name: "PostTitle",
})
</script>