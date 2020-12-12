import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/style.scss'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome
} from '@fortawesome/free-solid-svg-icons'
import {
  faCopy
} from '@fortawesome/free-regular-svg-icons'
import {
  faDocker
} from '@fortawesome/free-brands-svg-icons'

library.add(faHome)
library.add(faCopy)
library.add(faDocker)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
