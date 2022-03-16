<template>
    <div class="container mx-auto">
        <div v-for="(row,index) in content" :key="index">
            <tile :content="row" />
        </div>
    </div>
</template>
<script>
import Tile from '~/components/projects/GalleryTile.vue'

export default {
    components: {
        Tile
    },
    props: {
        content: {
            required: true,
            type: Array
        }
    }
}
</script>
