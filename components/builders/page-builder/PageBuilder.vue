<template>
    <div>
        <component :is="block.typeHandle" v-for="(block, i) in blocks" :key="i" :block="block" />
    </div>
</template>
<script>
// Component Imports here
import ContentSimple from '~/components/builders/page-builder/components/ContentSimple.vue'
import List from '~/components/builders/page-builder/components/List.vue'
import Experience from '~/components/builders/page-builder/components/Experience.vue'
import Contact from '~/components/builders/page-builder/components/Contact.vue'

export default {
    components: {
        ContentSimple,
        List,
        Experience,
        Contact
    },
    props: {
        blocks: {
            type: Array,
            required: true
        }
    }
}

</script>
