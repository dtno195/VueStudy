<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
    
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote";
export default {
  components: {
    appQuoteGrid:QuoteGrid,
    appNewQuote:NewQuote
  },
  data() {
    return {
      quotes: ["Just a Quote to see something"],
      maxQuote: 10
    };
  },
  methods: {
    newQuote(quote){
      this.quotes.push(quote);
    }
  },
};
</script>

<style>

</style>
