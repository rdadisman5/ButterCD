<template>
{{ rss }}
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"

import { butter } from "@/buttercms.js"

export default defineComponent({
    name: "Rss",
    setup () {
        const rss = ref( "" )

        onMounted( async () => {
            rss.value = ( await butter.feed.retrieve( "rss" ) ).data.data
        })

        return {
            rss
        }
    },
})
</script>