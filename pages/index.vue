<template>
    <div v-if="entry" class="overflow-hidden relative">
        <Hero :content="entry.hero[0]" />
        <div class="index__overlay absolute font-heading uppercase text-brand-blue">
            <span>{{ entry.hero[0].backgroundText }}</span>
            <span class="lg:hidden">{{ entry.hero[0].backgroundText }}</span>
            <span class="lg:hidden">{{ entry.hero[0].backgroundText }}</span>
        </div>
        <PageBuilder :blocks="entry.pageBuilder" />
    </div>
</template>

<script>
import HomeEntry from '~/apollo/content/singles/home'

import PageBuilder from '~/components/builders/page-builder/PageBuilder.vue'
import Hero from '~/components/core/hero.vue'

export default {
    components: {
        PageBuilder,
        Hero
    },
    data() {
        return {
            entry: null
        }
    },
    apollo: {
        entry: {
            prefetch: true,
            manual: true,
            query: HomeEntry,
            variables() {
                const url = this.$route.path.replace(/^\/+/g, '')
                return {
                    uri: url,
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
