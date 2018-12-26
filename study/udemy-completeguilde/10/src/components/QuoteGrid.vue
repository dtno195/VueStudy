<template>
    <div class="row">
        <app-quote v-for="quote in quotes" :key="quote.id">{{quotes}}</app-quote>
    </div>
</template>
<script>
    import Quote from './Quote.vue';

    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style>

</style>