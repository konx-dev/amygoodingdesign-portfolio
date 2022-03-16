<template>
    <div class="overflow-hidden relative">
        <Hero :content="entry.hero[0]" />
        <div class="index__overlay absolute font-heading uppercase text-brand-blue">
            <span>{{ entry.hero[0].backgroundText }}</span>
            <span class="lg:hidden">{{ entry.hero[0].backgroundText }}</span>
            <span class="lg:hidden">{{ entry.hero[0].backgroundText }}</span>
        </div>
        <!-- <Projects :content="entry.projects" /> -->
        <div class="bg-brand-navy py-16">
            <ProjectsGallery :content="entry.projectsGallery" />
        </div>
    </div>
</template>

<script>
import HomeEntry from '~/apollo/content/singles/home'

import Hero from '~/components/core/hero.vue'
import ProjectsGallery from '~/components/projects/gallery.vue'
// import Projects from '~/components/core/projects.vue'

export default {
    components: {
        Hero,
        ProjectsGallery
        // Projects
    },
    data() {
        return {
            entry: null
        }
    },
    computed: {
        navigation() {
            return this.$store.state.general.navigation
        }
    },
    apollo: {
        entry: {
            prefetch: true,
            manual: true,
            query: HomeEntry,
            variables() {
                return {
                    siteId: process.env.SITE_ID
                }
            },
            result({ data }) {
                this.entry = data.entry
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.index {
    &__overlay {
        opacity: 0.05;
        top: 15%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(-10deg);
        font-size: 125px;
        pointer-events: none;
        line-height: 1.1;

        @include min-bp($sm) {
            font-size: 200px;
        }

        @include min-bp($md) {
            font-size: 300px;
        }
        @include min-bp($lg) {
            line-height: 1;
            font-size: 400px;
        }
    }
}
</style>
