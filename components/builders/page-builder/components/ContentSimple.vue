<template>
    <div class="mx-auto container px-4 lg:px-0">
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
        strong {
            font-family: $heading;
            color: $pink
        }
    }
}

</style>
