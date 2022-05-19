<template>
    <div class="flex flex-col px-4 lg:px-0 justify-between my-8 lg:flex-row lg:my-16 overflow-hidden gallery-wrapper" :class="content.dualVariation !== 'fiftyFifty' ? content.dualVariation : null">
        <div v-for="(tile,index) in content.entries" :key="index" class="gallery-tile overflow-hidden relative flex items-end" :class="['gallery-tile--' + entryCount, 'tile-pos--' + (index + 1)]">
            <div class="gallery-tile__image lg:absolute lg:top-0 lg:left-0 w-full h-full">
                <v-img :src="tile.imageAsset[0].url" :alt="tile.imageAsset[0].title" img-class="w-full h-full object-cover" />
            </div>
            <div class="gallery-tile__heading hidden lg:flex relative bg-brand-navy w-full h-20 px-8 items-center">
                <span class="text-brand-white font-body uppercase text-5xl">{{ tile.title }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            entryCount: this.content.entries.length
        }
    }
}
</script>
<style lang="scss" scoped>

.gallery {

    &-wrapper {
        
        & > div {
            margin-bottom: 2rem;
            @include min-bp($lg) {
                margin-bottom: 0;
            }
        }
        & div:last-child {
            margin-bottom: 0;
        }
    }

    &-tile {

        @include min-bp($lg) {

            &:hover {
                .gallery-tile {
                    &__heading {
                        transform: translateY(0);
                    }
                    &__image {
                        transform: scale(1.1);
                    }
                }
            }

            &--1, &--2, &--3 {
                min-height: 500px;
            }

            &--1 {
                width: 100%;
            }
            &--2 {
                width: 48%;
            }
            &--3 {
                width: 30.6%;
            }

            &__image {
                transition: transform 1.5s;
            }

            &__heading {
                transform: translateY(100%);
                transition: transform 0.5s;
            }
        }
    }
}
// Dual variations
@include min-bp($lg) {
    .seventyThirty {
        .tile-pos {
            &--1 {
                width: 68%;
            }
            &--2 {
                width: 28%;
            }
        }
    }
    .thirtySeventy {
        .tile-pos {
            &--1 {
                width: 28%;
            }
            &--2 {
                width: 68%;
            }
        }
    }
}
</style>
