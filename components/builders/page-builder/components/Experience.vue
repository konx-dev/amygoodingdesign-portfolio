<template>
    <div :class="{ 'bg-brand-navy' : block.blockType == 'currently' }">
        <div class="px-4 px-0 mx-auto container lg:max-w-6xl" :class="block.blockType == 'currently' ? 'py-10 lg:py-20' : 'my-10 lg:my-20' ">
            <h2 class="font-heading text-center text-4xl md:text-6xl lg:text-8xl text-slant uppercase" :class="block.blockType == 'currently' ? 'text-brand-white' : 'text-brand-navy' ">
                {{ block.blockType }}
            </h2>    
            <div class="mt-5">
                <div class="" v-for="entry in block.positions" :key="entry.id" :class="block.positions.length == 1 ? '' : 'my-10' ">
                    <h3 class="border-t-4 text-2xl pt-1 border-brand-pink mx-auto w-max text-center font-anton uppercase" :class="block.blockType == 'currently' ? 'text-brand-white' : 'text-brand-navy' ">
                        {{ entry.title }}, {{ entry.experience[0].location }}
                    </h3>
                    <h4 class="text-center text-xl font-body" :class="block.blockType == 'currently' ? 'text-brand-white' : 'text-brand-navy' ">
                        {{ entry.experience[0].position }}
                    </h4>
                    <div class="mt-2 flex flex-row items-center justify-center">
                        <div class="font-body uppercase text-xs" :class="block.blockType == 'currently' ? 'text-brand-white' : 'text-brand-black' ">Find out more</div>
                        <div>
                            <font-awesome-icon class="ml-2 text-xl text-brand-pink" :icon="['fas', 'caret-down' ]" />
                        </div>
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
    }
}
</script>
