<template>
  <div>
    <Update v-for="(update,index) in updates" :key="index" :update="update"/>
  </div>
</template>

<script>
import Update from '@/components/Update.vue'
export default {
  name:'Updates',
  components:{
    Update
  },
  data(){
    return{
      updates:[{title:'Lorem Ipsum',message:'Lorem Ipsum dolor',points:10},{title:'Lorem Ipsum',message:'Lorem Ipsum dolor',points:10},{title:'Lorem Ipsum',message:'Lorem Ipsum dolor',points:10}]
    }
  }
}
</script>
