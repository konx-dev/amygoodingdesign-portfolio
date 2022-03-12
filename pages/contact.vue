<template>
    <div class="contact-view bg-brand-navy py-24">
        <div class="pt-8 text-center">
            <h1 class="contact-view__heading text-brand-white font-heading uppercase">
                Hello
            </h1>
        </div>
        <div class="px-8">
            <ContactForm />
        </div>
    </div>
</template>
<script>
import ContactForm from '~/components/forms/contact.vue'

export default {
    components: {
        ContactForm
    }
}

</script>
<style lang="scss" scoped>
.contact-view {
    &__heading {
        transform: rotate(-3deg);
        font-size: 48px;
    }
}

</style>
