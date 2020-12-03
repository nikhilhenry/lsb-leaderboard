<template>
  <div>
    <virtual-list style="height: 300px; overflow-y: auto;"
      :data-key="'id'"
      :data-sources="updates"
      :data-component="updateComponent"
    />
  </div>
</template>

<script>
import Update from '@/components/Update.vue'
import {getMessages} from '../api/getMessages'
import VirtualList from 'vue-virtual-scroll-list'

export default {
  name:'Updates',
  components:{
    'virtual-list': VirtualList
  },
  data(){
    return{
      updates:[],
      updateComponent:Update
    }
  },
  mounted(){
    getMessages()
      .then(res=>{
        res.forEach(doc=>{
        const update = doc.data()
        update.id = doc.id
        this.updates.push(update)
      })
      })
  }
}
</script>
