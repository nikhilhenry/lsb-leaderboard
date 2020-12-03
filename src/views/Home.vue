<template>
  <div class="home">
    <h1 class="title has-text-centered mt-6">Legacy School House Leaderboard</h1>
    <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <Leaderboard/>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <article class="message is-success">
                <div class="message-body">
                  <p>Please note that these scores are only temporary and live points will be updated from the date of event commencement (14/12/2020).</p>
                  <p>Looking forward to enthusiastic participation - Nikhil Henry, Student Council President.</p>
                </div>
              </article>
              <Updates/>
            </div>
          </div>
          <h3 class="subtitle-2 has-text-centered">Built by <a href="https://nikhilhenry.github.io">Nikhil Henry</a>, from the President's Office.</h3>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Leaderboard from '@/components/LeaderBoard'
import Updates from '@/components/Updates'
export default {
  name: 'Home',
  components: {
    Leaderboard,
    Updates
  }
}
</script>

<style lang="scss" scoped>
.section{
  padding-top:1.5em;
}
</style>
