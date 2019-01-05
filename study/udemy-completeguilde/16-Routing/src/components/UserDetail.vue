<template>
    <div>
        <h3>Some User Details</h3>
        <p>The User Loaded has Id : {{$route.params.id}}</p>
        <router-link tag="button" 
            :to="{ name : 'userEdit', params:{id: $route.params.id},query:{locale:'vn',q:1000}}"
            class="btn btn-warning"
        >Edit User</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
