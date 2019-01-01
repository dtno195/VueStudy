<template>
  <div id="app">
    <h1>Mixins And Filter</h1>
    <p>{{text|toUppercase|to-lowercase}}</p>
    <hr>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit.id">{{fruit}}</li>
    </ul>
    <hr>
    <app-list></app-list>
  </div>
</template>

<script>
import List from './List'
import {fruitMixin} from './fruitMixin.js'
export default {
  mixins:[fruitMixin],
  data() {
    return {
      text: "hEllO s1mPle",
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components:{
    appList : List
  }
};
</script>

<style>
</style>
