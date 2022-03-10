<template>
    <div>
        <Hero :content="entry.hero[0]" />
        <Projects :content="entry.projects" />
        <div class="h-72 bg-brand-teal">block</div>
        <div class="h-72 bg-brand-navy">block</div>
    </div>
</template>

<script>
import HomeEntry from '~/apollo/content/singles/home'

import Hero from '~/components/core/hero.vue'
import Projects from '~/components/core/projects.vue'

export default {
    components: {
        Hero,
        Projects
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
