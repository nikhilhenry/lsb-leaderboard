<template>
<div class="login">
  <div class="columns is-mobile is-centered mt-6">
    <div class="column is-one-quarter">
      <article class="card">
        <div class="card-content">
          <h1 class="title has-text-centered">Login</h1>
          <div class="form">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="example@lsb.edu.in" v-model="email" required>
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
export default {
  name:'Login'
}
</script>

<style lang="scss" scoped>
</style>