<template>
  <div class="home">
    <h1>Welcome to the Legacy School House Leaderboard</h1>
    <Leaderboard/>
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
