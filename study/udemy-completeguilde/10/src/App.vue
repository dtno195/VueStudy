<template>
  <div class="container">
   
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import QuoteGrid from './components/QuoteGrid'

export default {
  name: 'app',
  components: {
      appQuoteGrid: QuoteGrid
  },
  data:function(){
    return {
      quotes:[
        'Just a Quote to see something'
      ],
      maxQuotes:10
    }
  }
}
</script>

<style>

</style>
