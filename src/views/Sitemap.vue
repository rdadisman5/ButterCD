<template>
{{ sitemap }}
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"

import { butter } from "@/buttercms.js"

export default defineComponent({
    name: "Sitemap",
    setup () {
        const sitemap = ref( "" )

        onMounted( async () => {
            sitemap.value = ( await butter.feed.retrieve( "sitemap" ) ).data.data
        })

        return {
            sitemap
        }
    },
})
</script>