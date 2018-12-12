<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <button @click="selectedComponent='appQuote'">Quote</button>
          <button @click="selectedComponent='appAuthor'">Author</button>
          <button @click="selectedComponent='appNew'">New</button>
          <h2>{{selectedComponent}}</h2>
          <hr>
          <keep-alive>
            <component :is="selectedComponent">
              <p>Default Content</p>
            </component>
          </keep-alive>
          <!-- <appQuoute>
            <h2 slot="title">{{quoteTitle}}</h2>
            <p >A wonderful Quote</p>
          </appQuoute>
          <app-author></app-author> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Quoute from "./components/Quote";
import Author from "./components/Author";
import New from "./components/New";

export default {
  name: "app",
  data:function(){
    return{
      quoteTitle : 'The Simple',
      selectedComponent:'appQuote',
    }
  },
  components: {
    appQuoute: Quoute,
    appAuthor : Author,
    appNew : New,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
