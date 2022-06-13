<template>
    <div class="mx-auto text-center my-10 lg:my-20 lg:max-w-5xl container px-4 lg:px-0">
        <div class="content-simple__body" v-html="block.body" />
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

.content-simple {
    &__body {

        p {
            font-family: $body;
            font-size: 1rem;

            @include min-bp($md) {
                font-size: 1.5rem;
            }
            @include min-bp($lg) {
                font-size: 2rem;
            }
        }

        strong {
            font-family: $heading;
            color: $pink;
            font-size: 1.2rem;

            @include min-bp($md) {
                font-size: 1.8rem;
            }
            @include min-bp($md) {
                font-size: 2.4rem;
            }
        }
    }
}

</style>
