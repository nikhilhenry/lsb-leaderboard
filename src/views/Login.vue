<template>
<div class="login">
  <div class="columns is-mobile is-centered mt-6">
    <div class="column is-half-mobile is-two-fifths-desktop">
      <article class="card">
        <div class="card-content">
          <h1 class="title has-text-centered">Login</h1>
          <article class="message" v-if="errors" :class="IsSuccess ? 'is-success':'is-danger'">
            <div class="message-body">
              <p v-for="(error,index) in errors" :key="index">{{error.message}}</p>
            </div>
          </article>
          <div class="form">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="example@lsb-leaderboard.com" v-model="email" required>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="password" v-model="password" required>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary is-medium is-fullwidth mt-6" v-on:click="login">LOGIN</button>
              </div>
            </div>                     
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name:'Login',
  data(){
    return{
      email:null,
      password:null,
      errors:null,
      IsSuccess:false
    }
  },
  methods:{
    login:function(e){
      if(this.email && this.password){
        firebase.auth()
          .signInWithEmailAndPassword(this.email,this.password)
          .then(
            ()=>{
              this.errors=[]
              this.errors.push({message:'LoggedIn Successfully.'})
              this.IsSuccess=true
              
              //go to updatePoints route
              setTimeout(() => this.$router.push({ name: "UpdatePoints" }), 1000);
            },
            err=>{
              this.errors=[]
              this.errors.push(err)
              this.IsSuccess=false
            }
        )}
        else {
          this.errors=[]
          this.errors.push({message:'Please enter email and password.'})
          this.IsSuccess=false
        }
      e.preventDefault();
    }
  }
}
</script>

<style lang="scss" scoped>

.column{
  max-width:500px!important;
}
</style>
