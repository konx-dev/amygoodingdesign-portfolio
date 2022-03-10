<template>
    <div>
        <header-default />
        <main>
            <nuxt />
        </main>
    </div>
</template>
<script>
import Header from '~/components/core/header/default.vue'

export default {
    components: {
        'header-default': Header
    }
}

</script>
