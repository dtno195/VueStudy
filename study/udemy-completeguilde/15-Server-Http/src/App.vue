<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>HTTP</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label for="">Mail</label>
          <input type="text" class="form-control" v-model="user.mail">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
      user:{
        username:'',
        mail:''
      }
    }
  },
  methods: {
    submit(){
      this.$http.post('https://vuejs-firebase-8c45a.firebaseio.com/data.json',this.user)
      .then(response=>{
        console.log(response)
      },error=>{
        console.log(error)
      })
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
