<template>
    <router-go to="/" class="project__tile overflow-hidden w-full flex justify-center items-center h-full mb-8 md:mx-4 xl:mb-12 xl:mx-8">
        <div class="tile__title p-10 w-full h-full flex flex-col items-center justify-center text-center relative z-10 font-body uppercase text-brand-white">
            <span>{{ content.title }}</span>
            <span class="text-xl mt-8">{{ content.private }}</span>
        </div>
    </router-go>
</template>
<script>
export default {
    props: {
        content: {
            required: true,
            type: Object
        }
    }
}
</script>
<style lang="scss" scoped>
.project {
    &__tile {
        background: $black;
        height: 300px;
        max-width: 300px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            opacity: 0;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.5);
            width: 100%;
            height: 100%;
            transition: opacity 1s;
        }

        &:hover {
            &:after {
                opacity: 100%;
            }
        }
        
        @include min-bp($md) {
            max-width: unset;
            width: 350px;
            height: 350px;
        }
        @include min-bp($lg) {
            width: 450px;
            height: 450px;
        }
        @include min-bp($xl) {
            width: 550px;
            height: 550px;
        }
        @include min-bp($xxl) {
            width: 680px;
            height: 680px;
        }

        .tile {
            &__title {
                font-size: 40px;
                line-height: 1.05;

                @include min-bp($sm) {
                    font-size: 60px;
                }
                
                @include min-bp($lg) {
                    font-size: 100px;
                    transform: translateY(100%);
                    transition: transform 0.5s;
                }
            }
        }

        @include min-bp($lg) {
            &:hover {
                .tile {
                    &__title {
                        transform: translateY(0%);
                    }
                }  
            }
        }
    }
}

</style>
