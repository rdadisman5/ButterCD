<template>
<div>
    <div class="min-h-screen mb-20">
        <div class="relative pt-6 pb-6 px-4 sm:px-6 lg:px-8">
            <nav
                class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            >
                <div class="ml-10 pr-4 space-x-8">
                    <router-link
                        to="/"
                        class="font-medium text-gray-500 hover:text-gray-900"
                    >
                        Home
                    </router-link>
                    <router-link
                        to="/posts"
                        class="font-medium text-gray-500 hover:text-gray-900"
                    >
                        Blog
                    </router-link>
                    <router-link
                        to="/case-studies"
                        class="font-medium text-gray-500 hover:text-gray-900"
                    >
                        Pages with types
                    </router-link>
                    <router-link
                        to="/faq"
                        class="font-medium text-gray-500 hover:text-gray-900"
                    >
                        Collections
                    </router-link>
                </div>
            </nav>
        </div>
        <container>
            <slot></slot>
        </container>
    </div>
    <footer-element></footer-element>
</div>
</template>


<script>
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"

import Container from "./Container.vue"
import FooterElement from "./FooterElement.vue"


export default defineComponent({
    name: "Layout",
    components: {
        Container,
        FooterElement,
        RouterLink
    },
})
</script>