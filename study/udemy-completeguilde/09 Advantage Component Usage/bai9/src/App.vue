<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <appQuoute>
            <h2>The Quote</h2>
            <p>A wonderful Quote</p>
          </appQuoute>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Quoute from "./components/Quote";

export default {
  name: "app",
  components: {
    appQuoute: Quoute
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
