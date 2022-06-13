<template>
    <div :class="{ 'bg-brand-navy' : block.blockType == 'currently' }">
        <div class="px-4 px-0 mx-auto container lg:max-w-6xl" :class="block.blockType == 'currently' ? 'py-10 lg:py-20' : 'my-10 lg:my-20' ">
            <h2 class="font-heading text-center text-4xl md:text-6xl lg:text-8xl text-slant uppercase" :class="block.blockType == 'currently' ? 'text-brand-white' : 'text-brand-navy' ">
                {{ block.blockType }}
            </h2>    
            <div class="mt-5 lg:mt-10">
                <div v-for="(entry) in block.positions" :key="entry.id" :class="block.positions.length == 1 ? '' : 'my-10 lg:my-16' ">
                    <h3 class="border-t-4 lg:border-t-8 text-2xl lg:text-4xl pt-1 lg:pt-2 border-brand-pink mx-auto w-max text-center font-anton uppercase" :class="block.blockType == 'currently' ? 'text-brand-white' : 'text-brand-navy' ">
                        {{ entry.title }}, {{ entry.experience[0].location }}
                    </h3>
                    <h4 class="text-center text-xl lg:text-2xl font-body" :class="block.blockType == 'currently' ? 'text-brand-white' : 'text-brand-navy' ">
                        {{ entry.experience[0].position }}
                    </h4>
                    <div class="mt-2 flex flex-row cursor-pointer items-center justify-center" @click="toggleDropdown(entry.id)">
                        <div class="font-body uppercase text-xs" :class="block.blockType == 'currently' ? 'text-brand-white' : 'text-brand-black' ">
                            Find out more
                        </div>
                        <div>
                            <font-awesome-icon class="ml-2 text-2xl text-brand-pink caret" :class="{ 'caret--active' : activePanels.includes(entry.id) }" :icon="['fas', 'caret-down' ]" />
                        </div>
                    </div>
                    <div class="mt-2 bg-brand-grey experience__description mx-auto max-w-xl lg:max-w-2xl" :class="{ 'experience__description--active' : activePanels.includes(entry.id) }">
                        <div class="text-sm font-body p-5" v-html="entry.experience[0].description" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        block: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            activeDropdown: null,
            activePanels: []
        }
    },
    methods: {
        toggleDropdown(val) {
            if (this.activePanels.includes(val)) {
                const itemIndex = this.activePanels.indexOf(val)
                this.activePanels.splice(itemIndex, 1)
            } else {
                this.activePanels.push(val)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.experience {
    &__description {
        max-height: 0;
        transition: max-height 0.8s ease-in-out;
        overflow: hidden;

        &--active {
            max-height: 600px;
        }
    }
}
</style>
