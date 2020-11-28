<template>
  <div>
    <p>test</p>
    <svg class="barchart" :width="width" :height="height">
      <g class="bars" fill="none">
        <rect
          v-for="(bar, index) in bars"
          fill="pink"
          :key="index"
          :height="bar.height"
          :width="bar.width"
          :x="bar.x"
          :y="bar.y"
        ></rect>
      </g>
    </svg>
  </div>
</template>

<script>
import {scaleBand,scaleLinear} from 'd3-scale';

export default {
  name:'LeaderBoard',
  data() {
    return {
      height: 200,
      width: 500,
      dataset: [
        ["Bob", 33],
        ["Robin", 24],
        ["Mark", 22],
        ["Joe", 29],
        ["Eve", 38],
        ["Karen", 21],
        ["Kirsty", 25],
        ["Chris", 30],
      ],
    }
  },
  mounted(){
    console.log(this.data)
  },
  computed: {
    x() {
      return scaleBand()
        .range([0, this.width])
        .padding(0.3)
        .domain(this.dataset.map(e => e[0]));
    },
    y() {
      let values = this.dataset.map(e => e[1]);
      return scaleLinear()
        .range([this.height, 0])
        .domain([0, Math.max(...values)]);
    },
    bars() {
      let bars = this.dataset.map(d => {
        return {
          xLabel: d[0],
          x: this.x(d[0]),
          y: this.y(d[1]),
          width: this.x.bandwidth(),
          height: this.height - this.y(d[1])
        };
      });
      return bars;
    }
  }
}
</script>

<style lang="scss" scoped>
  // rect{
  //   fill:rgb(29, 148, 184);
  // }

  // text{
  //   fill:white;
  // }
</style>