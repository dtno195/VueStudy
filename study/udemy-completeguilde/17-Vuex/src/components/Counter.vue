<template>
  <div>
    <v-layout>
      <v-flex>
        <v-btn color="primary" @click="increment(100)" style="color:green">Incre</v-btn>
        <v-btn color="primary" @click="decrement(50)" style="color:green">Decre</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
   ...mapActions([
     'increment',
     'decrement'
   ])
  }
};
</script>
