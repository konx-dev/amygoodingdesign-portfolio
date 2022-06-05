<template>
    <div class="px-4 px-0 my-10 lg:my-20 mx-auto container lg:max-w-6xl">
        <div class="text-center mb-2 md:mb-5 lg:mb-10" v-if="block.heading">
            <h2 class="font-heading text-4xl md:text-6xl lg:text-8xl text-slant uppercase text-brand-navy">{{ block.heading }}</h2>
        </div>
        <div class="flex flex-col md:flex-row justify-between">
            <div class="usps pl-3 lg:pl-5 my-5 relative md:max-w-220 lg:max-w-300" v-for="item in block.listItem" :key="item.id">
                <h3 class="font-anton mb-1 md:mb-2 text-xl md:text-2xl lg:text-4xl uppercase">{{ item.heading }}</h3>
                <p class="font-body text-sm md:text-base lg:text-xl">{{ item.body }}</p>
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
