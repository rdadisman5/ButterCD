<template>
<footer class="bg-accent-1 border-t border-accent-2">
    <container>
        <div class="py-28 flex flex-col lg:flex-row items-center">
            <h3
                class="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"
            >
                Built with Vue 3 and ButterCMS
            </h3>
            <div
                class="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"
            >
                <a
                    href="https://buttercms.com/docs/api/?javascript#"
                    class="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                    Read Documentation
                </a>
                <a
                    href="https://github.com/ButterCMS/buttercms-vue-3-tutorial"
                    class="mx-3 font-bold hover:underline"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    </container>
</footer>
</template>


<script>
import { defineComponent } from "vue"

import Container from "./Container.vue"

export default defineComponent({
    name: "FooterElement",
    components: {
        Container,
    },
})
</script>