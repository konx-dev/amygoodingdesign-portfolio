import Vue from 'vue'
import LazyLoad from 'vanilla-lazyload'
import Vue2TouchEvents from 'vue2-touch-events'
import VueImage from '~/components/utils/VueImage.vue'
import RouterGo from '~/components/utils/RouterGo.vue'

// Load global component
Vue.component('v-img', VueImage)
Vue.component('router-go', RouterGo)
Vue.use(Vue2TouchEvents)

// Load lazy load third-party library
if (process.browser) {
    window.onNuxtReady((app) => {
        window.lazyLoad = new LazyLoad()
    })
}
