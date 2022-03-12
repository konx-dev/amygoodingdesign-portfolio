<template>
    <div class="my-4 lg:my-12 mx-auto contact-form">
        <form :action="actionUrl" method="POST">
            <input type="text" name="_honey" style="display:none">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I have recieved your email and will get back to you. - Amy Gooding">
            <input type="hidden" name="_next" value="http://localhost:1200/contact-success">
            <div class="flex flex-col mb-4">
                <label class="mr-2 mb-1 text-lg text-brand-white font-body uppercase" for="name">Name:</label>
                <input class="py-3 px-2" type="text" name="name" required>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mr-2 mb-1 text-lg text-brand-white font-body uppercase" for="email">Email:</label>
                <input class="py-3 px-2" type="email" name="email" required>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mr-2 mb-1 text-lg text-brand-white font-body uppercase" for="message">Message:</label>
                <textarea rows="4" class="p-2 resize-none" name="message"></textarea>
            </div>
            <div class="flex w-full mt-6">
                <button class="bg-brand-teal w-full text-lg text-brand-navy font-body uppercase py-4 px-6" type="submit">Send</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    computed: {
        actionUrl() {
            return 'https://formsubmit.co/' + process.env.FORM_ID
        }
    }
}
</script>
<style style="scss" scoped>
.contact-form {
    max-width: 500px;
}
</style>
