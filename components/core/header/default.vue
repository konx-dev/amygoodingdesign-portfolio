<template>
    <nav class="absolute top-0 right-0 w-full">
        <div class="container mx-auto flex flex-col md:flex-row items-center md:justify-between p-5">
            <div class="navigation__logo relative mb-4 md:mb-0">
                LOGO
            </div>
            <div class="navigation__bar w-full mx-8">
                <span>x</span>
            </div>
            <div class="navigation__items">
                <router-go v-for="(link,index) in navigation" :key="index" :to="link.linkField.url" class="font-body mx-2 text-brand-white uppercase">
                    {{ link.linkField.customText }}
                </router-go>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    computed: {
        navigation() {
            return this.$store.state.general.navigation
        }
    }
}
</script>
<style lang="scss" scoped>

.navigation {

    &__bar {

        display: none;

        @include min-bp($md) {
            position: relative;
            user-select: none;
            display: block;

            span {
                display: none;
            }

            &:after {
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: $pink;
                left: 0;
                width: 100%;
                height: 2px;
            }
        }
    }

    &__logo {

        &:before, &:after {
            content: '';
            background: $pink;
            position: absolute;
            height: 2px;
            top: 50%;
            transform: translateY(-50%)
        }

        &:before {
            right: 75px;
            width: 75px;

            @include min-bp($sm) {
                width: 150px;
            }
            @include min-bp($premd) {
                width: 200px;
            }
            @include min-bp($md) {
                background: unset;
            }
        }
        &:after {
            left: 75px;
            width: 75px;

            @include min-bp($sm) {
                width: 150px;
            }
            @include min-bp($premd) {
                width: 200px;
            }
            @include min-bp($md) {
                background: unset;
            }
        }
    }

    &__items {

        @include min-bp($md) {
            min-width: 200px;
        }

        a {
            position: relative;
            z-index: 1;

            &:after {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                bottom: 3px;
                z-index: -1;
                left: -2px;
                background: $pink;
                transform: rotate(-3deg);
            }
            &.nuxt-link-exact-active {
                &:after {
                    width: 100%;
                    transition: width 0.75s;
                }
            }
        }
    }
}

</style>
