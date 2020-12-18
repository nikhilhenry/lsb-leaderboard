<template>
  <div>
    <virtual-list style="height: 400px; overflow-y: auto;"
      :data-key="'id'"
      :data-sources="updates"
      :data-component="updateComponent"
      :estimate-size="6"
      v-on:tobottom="onScrollToBottom"
    />
    <!-- loader -->
    <progress class="progress is-small is-success" max="100" v-if="isLoading">1%</progress>
  </div>
</template>

<script>
import Update from '@/components/Update.vue'
import {getMessages,getMoreMessages} from '../api/getMessages'
import VirtualList from 'vue-virtual-scroll-list'

export default {
  name:'Updates',
  components:{
    'virtual-list': VirtualList
  },
  data(){
    return{
      updates:[],
      lastDoc:Object,
      updateComponent:Update,
      isLoading:false
    }
  },
  mounted(){

    this.isLoading=!this.isLoading
    getMessages()
      .then(res=>{
        res.forEach(doc=>{
        const update = doc.data()
        update.id = doc.id
        this.updates.push(update)
        this.lastDoc = doc
      })
      this.isLoading=!this.isLoading
      })
  },
  methods:{
    onScrollToBottom:async function(){
      // this.updates = this.updates.concat(getMoreMessages(this.updates[this.updates.length-1]))
      this.isLoading=true
      const updates = await getMoreMessages(this.lastDoc)
      updates.forEach(doc=>{
        const update = doc.data()
        update.id = doc.id
      
        this.updates.push(update)
        this.lastDoc = doc
      })
      this.isLoading=false
    }
  }
}
</script>
