<template>
    <div class="bg-brand-navy py-16">
        <div class="container mx-auto px-6 md:px-0 flex flex-row w-full flex-wrap justify-center md:justify-start">
            <tile v-for="(project,index) in filteredContent" :key="index" :content="project" />
        </div>
        <div class="py-16 bg-brand-navy">
            <div class="mx-auto container flex flex-col justify-center items-center">
                <div class="text-brand-white mb-4 text-center">Some of my projects are hidden, if you have a passphrase enter it below</div>
                <div>
                    <input v-model.lazy="enteredPassphrase" @change="checkPassphrase(enteredPassphrase)" class="py-2 px-10" />
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import tile from '~/components/projects/tile'

export default {
    components: {
        tile
    },
    props: {
        content: {
            required: true
        }
    },
    data() {
        return {
            enteredPassphrase: null,
            projectsUnlocked: false
        }
    },
    computed: {
        filteredContent() {
            return this.content
        }
    },
    methods: {
        checkPassphrase(val) {

            if (val === process.env.PASSWORD) {
                alert('passphrase correct, projects unlocked')
                this.projectsUnlocked = true
            } else {
                alert('passphrase incorrect')
                this.projectsUnlocked = false
            }
        }
    }
}
</script>
