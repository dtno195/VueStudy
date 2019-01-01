<template>
  <div>
    <h1>Mixins And Filter</h1>
    <hr>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit.id">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import {fruitMixin} from './fruitMixin.js'
export default {
 mixins:[fruitMixin]
};
</script>

<style>
</style>
