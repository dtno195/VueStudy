<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
    <template>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex v-for="elevation in elevations" :key="elevation" xs12 md4>
            <v-sheet class="pa-5" color="grey lighten-3">
              <v-sheet :elevation="elevation" class="mx-auto" height="100" width="100"></v-sheet>
            </v-sheet>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </v-app>
</template>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
