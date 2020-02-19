import '@/assets/vendor/nucleo/css/nucleo.css'
import '@/assets/vendor/font-awesome/css/font-awesome.css'
import '@/assets/scss/config.scss'
import VueLazyload from 'vue-lazyload'
import globalComponents from './globalComponents'
import globalDirectives from './globalDirectives'

export default {
    install(Vue) {
        Vue.use(globalComponents)
        Vue.use(globalDirectives)
        Vue.use(VueLazyload)
    }
}