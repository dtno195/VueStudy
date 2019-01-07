import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
import {routes} from './routes'
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {selector:to.hash}
    }
    return {x:0 ,y:0};
  }
});
router.beforeEach((to,from,next)=>{
  console.log('global beforeEach');
  next();
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')