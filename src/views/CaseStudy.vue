<template>
<layout>
    <article v-if="loaded">
        <header-element :title="caseStudy.fields.headline"></header-element>
        <div class="grid md:grid-flow-col md:auto-rows-max gap-4 mb-5">
            <div>
                <img
                    :alt="caseStudy.name"
                    :src="caseStudy.fields.customer_logo"
                    class="rounded-lg"
                >
            </div>
            <div>
                <div>
                    Study date:
                    <human-date
                        :date-string="caseStudy.fields.study_date"
                    ></human-date>
                </div>
                <div>
                    Industry: {{ caseStudy.fields.customer_industry }}
                </div>
                <div>
                    Subindustry: {{ caseStudy.fields.customer_subindustry }}
                </div>
                <div v-if="caseStudy.fields.customer_reviewed_case_study">
                    Reviewed by customer
                </div>
            </div>
        </div>
        <div
            class="mb-10"
            v-html="caseStudy.fields.study_body"
        ></div>
    </article>
</layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"
import { useRoute } from "vue-router"

import { butter } from "@/buttercms.js"
import HeaderElement from "@/components/HeaderElement.vue"
import HumanDate from "@/components/HumanDate.vue"
import Layout from "@/components/Layout.vue"

export default defineComponent({
    name: "CaseStudy",
    components: {
        HeaderElement,
        HumanDate,
        Layout,
    },
    setup () {
        const caseStudy = ref({})
        const loaded = ref( false )

        const route = useRoute()

        onMounted( async () => {
            caseStudy.value = (
                await butter.page.retrieve(
                    "customer_case_study",
                    route.params.slug
                )
            ).data.data
            document.title = caseStudy.value.name
            loaded.value = true
        })

        return {
            caseStudy,
            loaded,
        }
    },
})
</script>
