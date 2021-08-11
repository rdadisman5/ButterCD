<template>
<time :date-time="dateString">{{ humanDate }}</time>
</template>


<script>
import { computed, defineComponent } from "vue"

import { format, parseISO } from "date-fns"

export default defineComponent({
    name: "HumanDate",
    props: {
        dateString: {
            type: String,
            default: "",
        },
    },
    setup ( props ) {
        const humanDate = computed( () => {
            const date = parseISO( props.dateString )

            return format( date, "LLLL d, yyyy" )
        })

        return {
            humanDate,
        }
    },
})
</script>