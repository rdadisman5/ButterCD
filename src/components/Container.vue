<template>
<div class="container mx-auto px-5">
    <slot></slot>
</div>
</template>


<script>
import { defineComponent } from "vue"

export default defineComponent({
    name: "Container",
})
</script>