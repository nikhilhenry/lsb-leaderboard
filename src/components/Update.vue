<template>
  <div>
    <article class="card mb-3">
      <header class="card-header">
        <p class="card-header-title">{{update.title}}</p>
        <span class="tag">{{update.points}}</span>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i v-if="!isHidden" class="fas fa-angle-down" aria-hidden="true" @click="isHidden=!isHidden"></i>
            <i v-if="isHidden" class="fas fa-angle-up" aria-hidden="true" @click="isHidden=!isHidden"></i>
          </span>
        </a>
      </header>
      <div class="card-content" :class="{'is-hidden':isHidden}">
        <div class="content">
          <p>{{update.message}}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name:'Update',
  props:["update"],
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

</style>