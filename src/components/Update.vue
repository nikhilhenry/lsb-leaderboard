<template>
  <div>
    <article class="card mb-3">
      <header class="card-header"  @click="isHidden=!isHidden">
        <p class="card-header-title">{{source.title}}</p>
        <div class="extra">
          <span v v-if="source.isWinner" class="icon">
            <i class="fas fa-medal"></i>
          </span>
          <span class="tag is-success is-small">+ {{source.points}}</span>
        </div>
        <a class="card-header-icon" aria-label="more options">
          <span v-if="isHidden" class="icon">
            <i  class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
          <span v-if="!isHidden" class="icon">
            <i class="fas fa-angle-up" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content" :class="{'is-hidden':isHidden}">
        <div class="content">
          <p>{{source.content}}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name:'Update',
  props:{
      index: {
        type: Number
      },
      source: {
        type: Object,
        default () {
          return {
          }
        }
      }
  },
  data(){
    return{
      isHidden:true,
    }
  }
}
</script>

<style lang="scss" scoped>
.is-hidden{
  display: none;
}

.extra{
  display: flex;
  align-items: center;
  justify-content: center;
}

article{
  margin:.5em;
  cursor: pointer;
}

.fa-medal{
  color:#FFD700;
  margin-right: 50px;
  font-size: 1.5em;
}

</style>