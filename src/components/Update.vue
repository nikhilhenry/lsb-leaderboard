<template>
  <div>
    <article class="card mb-3">
      <header class="card-header">
        <p class="card-header-title">{{source.title}}</p>
        <div class="extra">
          <span class="tag is-success is-small">+ {{source.points}}</span>
        </div>
        <a class="card-header-icon" aria-label="more options" @click="isHidden=!isHidden">
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
}

</style>