<template>
    <div class="hero overflow-hidden relative bg-brand-navy">
        <div class="container mx-auto">
            <h1 class="visually-hidden">{{ content.heading }}, {{ content.subheading }}</h1>
            <div class="flex hero__inner flex-col justify-center lg:justify-end lg:pb-20 px-6 md:px-0">
                <div class="hero__heading z-20 text-brand-pink font-heading uppercase">{{ content.heading }}</div>
                <div class="hero__subheading z-10 pl-2 md:pl-8 text-brand-black font-anton uppercase">{{ content.subheading }}</div>
            </div>
        </div>
        <!-- <div class="hero__overlay absolute font-heading uppercase text-brand-blue">
            <span>{{ content.backgroundText }}</span>
            <span class="lg:hidden">{{ content.backgroundText }}</span>
        </div> -->
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
            min-height: 800px;
        }
    }
    &__inner {
        min-height: 100vh;

        @include min-bp($lg) {
            min-height: 800px
        }
    }
    &__heading {
        font-size: 48px;
        transform: rotate(-3deg);

        @include min-bp($md) {
            font-size: 90px;
        }
    }
    &__subheading {
        margin-top: -15px;
        font-size: 38px;
        line-height: 1;

        @include min-bp($md) {
            margin-top: -30px;
            font-size: 80px;
        }
        @include min-bp($lg) {
            margin-top: -20px;
            max-width: 1200px;
        }
    }
    // &__overlay {
    //     opacity: 0.05;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%,-50%) rotate(-10deg);
    //     font-size: 125px;
    //     pointer-events: none;
    //     line-height: 1.1;

    //     @include min-bp($sm) {
    //         font-size: 200px;
    //     }

    //     @include min-bp($md) {
    //         font-size: 300px;
    //     }
    //     @include min-bp($lg) {
    //         line-height: 1;
    //         font-size: 400px;
    //     }
    // }
}

</style>
