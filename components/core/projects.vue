<template>
    <div>
        projects {{ content }}
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
