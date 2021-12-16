import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import axios from 'axios'
// axios를 import 

Vue.prototype.$eventBus = new Vue();
Vue.prototype.$axios = axios
// 다른 컴포넌트에서는 import 없이 this.$axios로 사용가능


// Make BootstrapVue available throughout your project
Vue.use(VueRouter)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
