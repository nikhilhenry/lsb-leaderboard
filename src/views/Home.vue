<template>
  <div class="home">
    <h1 class="title has-text-centered mt-6">Legacy School House Leaderboard</h1>
    <div class="section">
      <div class="container">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <Leaderboard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Leaderboard from '@/components/LeaderBoard'
export default {
  name: 'Home',
  components: {
    Leaderboard
  }
}
</script>

<style lang="scss" scoped>
</style>
