<template>
<layout>
    <header-element title="FAQ"></header-element>
    <ul
        v-for="(faq, index) in faqItems"
        :key="index"
    >
        <li
            :key="index"
            class="mb-5"
        >
            <div class="text-lg leading-6 font-medium text-gray-900">
                {{ faq.question }}
            </div>
            <div class="mt-4 text-base text-gray-500">
                {{ faq.answer }}
            </div>
        </li>
    </ul>
</layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"

import { butter } from "@/buttercms.js"
import HeaderElement from "@/components/HeaderElement.vue"
import Layout from "@/components/Layout.vue"

export default defineComponent({
    name: "FAQ",
    components: {
        HeaderElement,
        Layout,
    },
    setup () {
        const faqItems = ref([])

        onMounted( async () => {
            faqItems.value = (
                await butter.content.retrieve([ "faq_items" ])
            ).data.data.faq_items
        })

        return {
            faqItems,
        }
    },
})
</script>
