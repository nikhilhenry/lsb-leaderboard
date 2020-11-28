<template>
  <div>
    <p>test</p>
    <svg width="500" height="400" id="chart">
      <g v-for="(value,i) in houses" :key="value.index" :transform="`translate(0,${i *40})`">
        <rect height="30" :width="value * 10"></rect>
        <text y="20">{{value}}</text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name:'LeaderBoard',
  data(){
    return{
      houses:[30,60,90,120]
    }
  }

}
</script>

<style lang="scss" scoped>
  rect{
    fill:rgb(29, 148, 184);
  }

  text{
    fill:white;
  }
</style>