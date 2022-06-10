<template>
    <div :class="block.backgroundColour ? buildBackgroundColour() : null ">
        <div class="px-4 px-0 mx-auto container lg:max-w-6xl" :class="block.backgroundColour ? 'py-10 lg:py-20' : 'my-10 lg:my-20'">
            <div v-if="block.heading" class="text-center mb-2 md:mb-5 lg:mb-10">
                <h2 class="font-heading text-4xl md:text-6xl lg:text-8xl text-slant uppercase " :class="block.backgroundColour ? 'text-brand-white' : 'text-brand-navy' ">
                    {{ block.heading }}
                </h2>
            </div>
            <div class="flex flex-col md:flex-row justify-between">
                <div v-for="item in block.listItem" :key="item.id" class="usps pl-3 lg:pl-5 my-5 relative md:max-w-220 lg:max-w-300">
                    <h3 class="font-anton mb-1 md:mb-2 text-xl md:text-2xl lg:text-4xl uppercase" :class="block.backgroundColour ? 'text-brand-white' : 'text-brand-black' ">
                        {{ item.heading }}
                    </h3>
                    <p class="font-body text-sm md:text-base lg:text-xl" :class="block.backgroundColour ? 'text-brand-white' : 'text-brand-black' ">
                        {{ item.body }}
                    </p>
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
    methods: {
        buildBackgroundColour() {
            return ' bg-brand-' + this.block.backgroundColour.toLowerCase()
        }
    }
}
</script>
<style lang="scss">
.usps {
    &:after {
        content: '';
        background: $pink;
        width: 3px;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;

        @include min-bp($md) {
            width: 5px;
        }
    }
}
</style>
