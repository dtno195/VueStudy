<template>
  <div>
    <v-layout>
      <v-flex>
        <v-btn color="primary" @click="asyncIncrement({by:50,duration:500})" style="color:blue">Incre</v-btn>
        <v-btn color="primary" @click="asyncDecrement({by:50,duration:500})" style="color:blue">Decre</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapActions } from "vuex";
export default {
  methods: {
    // incre() {
    //   this.$store.commit('increment')
    // },
    // decre() {
    //   this.$store.commit('decrement')
    // }
    ...mapActions([
      'asyncIncrement',
      'asyncDecrement'
    ])
  }
};
</script>
