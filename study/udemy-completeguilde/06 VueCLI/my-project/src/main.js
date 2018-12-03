// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Home from './Home.vue'
Vue.config.productionTip = false
Vue.component('app-server', Home)
/* eslint-disable no-new */

export const eventBus = new Vue({
  methods:{
    chagneAge(age){
      this.$emit('ageWasEdited',age)
    }
  }
});

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})


