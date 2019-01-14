<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-coutenter ></app-coutenter>
        <app-another-counter></app-another-counter>
        <hr>
        <v-text-field
            label="Nhap vao day"
            single-line v-model="value"
          ></v-text-field>
        <p>{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Result from './components/Result'
import AnotherResult from './components/AnotherResult'
import AnotherCounter from './components/AnotherCounter'
export default {
  data() {
    return {
      counter:0,
    };
  },
  components: {
    appCoutenter : Counter,
    appResult : Result,
    appAnotherResult : AnotherResult,
    appAnotherCounter : AnotherCounter,
  },
  computed: {
    value:{
      get(){
        return this.$store.getters.value;
      },
      set(value){
        return this.$store.dispatch('updateValue',value);
      }
    }
  },
  methods: {
    updateValue(event){
      this.$store.dispatch('updateValue',event.target.value)
    }
  },
};
</script>
