<template>
  <div class="leaderboard">
    <svg class="barchart" :width="width + 40" :height="height + 105">
      <g transform="translate(20, 80)">
        <g class="x-axis" fill="none" :transform="`translate(0, ${height})`">
          <g
            class="tick"
            opacity="1"
            font-size="18"
            font-family="Avenir, Helvetica, Arial, sans-serif"
            text-anchor="middle"
            v-for="(bar, index) in bars"
            :key="index"
            :transform="`translate(${bar.x + bar.width / 2}, 0)`"
          >
            <text fill="black" y="9" dy="0.71em">{{ bar.xLabel }}</text>
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
            rx="5"
            ry="5"
          ></rect>
        </g>
        <g class="icons" fill="none"
          v-for="(bar, index) in bars"
          :key="index"
          :transform="`translate(${bar.x + bar.width/4}, ${bar.y - 60})`"
        >
        <image :href="bar.image" height="70" width="70" x="-15" y="-20"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import {scaleBand,scaleLinear} from 'd3-scale';
import {getPoints} from '../api/getPoints';

export default {
  name:'LeaderBoard',
  data() {
    return {
      height: 300,
      width: 500,
      dataset:[]
    }
  },
  mounted(){
    console.log(this.data)
    getPoints()
      .then(res=>this.updateData(res))
      .catch(err=>console.log(err))
  },

  //update data
  methods:{
    updateData(incomeData){
      //data values to dataset

      //poseidon
      this.dataset.push([incomeData.docs[0].data().points,incomeData.docs[0].data().points,require('../assets/poseidon.png'),'#0066b2'])
      //phoenix
      this.dataset.push([incomeData.docs[1].data().points,incomeData.docs[1].data().points,require('../assets/phoenix.png'),'#E32636'])
      //hercules_
      this.dataset.push([incomeData.docs[2].data().points,incomeData.docs[2].data().points,require('../assets/hercules_.png'),'#FFD700'])
      //ceasar
      this.dataset.push([incomeData.docs[3].data().points,incomeData.docs[3].data().points,require('../assets/caesar.png'),'#009245'])
    }
  },

  // graph stuff
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
.leaderboard{
  text-align: center;
}
</style>