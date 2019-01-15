import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from "bootstrap-vue"
import {routes} from './routes'
import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter)


const router = new VueRouter({
  mode:'history',
  routes 
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
