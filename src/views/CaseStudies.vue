<template>
<layout>
    <header-element title="Case studies"></header-element>
    <div
        v-for="(caseStudy, index) in caseStudies"
        :key="index"
        class="grid grid-flow-col auto-rows-max gap-4 mb-5"
    >
        <div>
            <router-link
                :to="{ name: 'CaseStudy', params: { slug: caseStudy.slug } }"
            >
                <img
                    :alt="caseStudy.fields.headline"
                    :src="caseStudy.fields.customer_logo"
                    class="rounded-lg"
                >
            </router-link>
        </div>
        <div>
            <h3 class="text-3xl mb-3 mt-3 leading-snug">
                <router-link
                    :to="{
                        name: 'CaseStudy',
                        params: { slug: caseStudy.slug },
                    }"
                >
                    {{ caseStudy.fields.headline }}
                </router-link>
            </h3>
            Study date:
            <human-date :date-string="caseStudy.fields.study_date"></human-date>
            <div v-if="caseStudy.fields.customer_reviewed_case_study">
                Reviewed by customer
            </div>

            <div
                v-for="(ref, refIndex) in caseStudy.fields.ref"
                :key="refIndex"
            >
                {{ ref.question }} - {{ ref.answer }}
            </div>
        </div>
    </div>
</layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"
import { RouterLink } from "vue-router"

import { butter } from "@/buttercms.js"
import HumanDate from "@/components/HumanDate.vue"
import HeaderElement from "@/components/HeaderElement.vue"
import Layout from "@/components/Layout.vue"

export default defineComponent({
    name: "CaseStudies",
    components: {
        HeaderElement,
        HumanDate,
        Layout,
        RouterLink
    },
    setup () {
        const caseStudies = ref([])

        onMounted( async () => {
            caseStudies.value = (
                await butter.page.list( "customer_case_study" )
            ).data.data
        })

        return {
            caseStudies,
        }
    },
})
</script>
