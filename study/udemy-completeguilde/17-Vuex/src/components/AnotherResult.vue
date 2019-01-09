<template>
    <div>
        <p>Counter : {{counter}}</p>

    </div>
</template>
<script>
export default {
    computed: {
        counter(){
            return this.$store.getters.doubleCounter
        }
    },
}
</script>
