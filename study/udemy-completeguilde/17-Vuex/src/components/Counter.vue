<template>
  <div>
    <v-layout>
      <v-flex>
        <v-btn color="primary" @click="incre" style="color:green">Incre</v-btn>
        <v-btn color="primary" @click="decre" style="color:green"> Decre</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  methods: {
    incre() {
      this.$store.state.counter++;
    },
    decre() {
      this.$store.state.counter--;
    }
  }
};
</script>
