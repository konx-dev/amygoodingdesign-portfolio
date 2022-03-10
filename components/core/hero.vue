<template>
    <div class="hero bg-brand-navy">
        <div class="container mx-auto">
            <h1 class="visually-hidden">{{ content.heading }}, {{ content.subheading }}</h1>
            <div class="flex h-screen flex-col justify-center px-6">
                <div class="hero__heading text-brand-pink font-heading uppercase">{{ content.heading }}</div>
                <div class="hero__subheading text-brand-black font-body uppercase">{{ content.subheading }}</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        content: {
            required: true
        }
    }
}

</script>
<style lang="scss" scoped>

.hero {
    .container {
        min-height: 100vh;
        height: 100%;

        @include min-bp($lg) {
            min-height: 600px;
        }
    }
}

</style>
