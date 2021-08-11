<template>
{{ atom }}
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"

import { butter } from "@/buttercms.js"

export default defineComponent({
    name: "Atom",
    setup () {
        const atom = ref( "" )

        onMounted( async () => {
            atom.value = ( await butter.feed.retrieve( "atom" ) ).data.data
        })

        return {
            atom
        }
    },
})
</script>