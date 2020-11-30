<template>
  <div>
    <Update v-for="(update,index) in updates" :key="index" :update="update"/>
  </div>
</template>

<script>
import Update from '@/components/Update.vue'
import {getMessages} from '../api/getMessages'

export default {
  name:'Updates',
  components:{
    Update
  },
  data(){
    return{
      updates:[]
    }
  },
  mounted(){
    getMessages()
      .then(res=>{
        res.forEach(doc=>{
        this.updates.push(doc.data())
        })
      })
  }
}
</script>
