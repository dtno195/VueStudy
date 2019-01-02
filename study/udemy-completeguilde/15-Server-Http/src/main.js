import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-firebase-8c45a.firebaseio.com';
Vue.http.interceptors.push((request,next)=>{
  console.log(request);
  if(request.method=='POST'){
    request.method=='PUT'
  }
  next(response=>{
    response.json = ()=>{
      return {messages:response.body}
    }
  });
})
new Vue({
  render: h => h(App),
}).$mount('#app')
