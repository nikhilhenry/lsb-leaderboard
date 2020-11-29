<template>
  <div>
    <svg class="barchart" :width="width + 40" :height="height + 100">
      <g transform="translate(20, 70)">
        <g class="x-axis" fill="none" :transform="`translate(0, ${height})`">
          <g
            class="tick"
            opacity="1"
            font-size="15"
            font-family="sans-serif"
            text-anchor="middle"
            v-for="(bar, index) in bars"
            :key="index"
            :transform="`translate(${bar.x + bar.width / 2}, 0)`"
          >
            <text fill="currentColor" y="9" dy="0.71em">{{ bar.xLabel }}</text>
          </g>
        </g>
        <g class="bars" fill="none">
          <rect
            v-for="(bar, index) in bars"
            :fill="bar.color"
            :key="index"
            :height="bar.height"
            :width="bar.width"
            :x="bar.x"
            :y="bar.y"
          ></rect>
        </g>
        <g class="icons" fill="none"
          v-for="(bar, index) in bars"
          :key="index"
          :transform="`translate(${bar.x + bar.width/4}, ${bar.y - 60})`"
        >
        <image :href="bar.image" height="50" width="50" x="-5"/>
        </g>
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
      height: 300,
      width: 500,
      dataset: [
        [39, 39,require('../assets/Posideon.png'),'#52A1D3'],
        [24, 24,require('../assets/Phoneix.png'),'#D9311C'],
        [22, 22,require('../assets/Hercules.png'),'#D6D02F'],
        [29, 29,require('../assets/Ceasar.png'),'#52D38E'],
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
          height: this.height - this.y(d[1]),
          image:d[2],
          color:d[3]
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