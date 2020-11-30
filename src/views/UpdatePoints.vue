<template>
<div class="columns is-mobile is-centered is-vcentered mt-6">
  <div class="column is-half-mobile is-two-fifths-desktop">

    <!-- errrors -->
    <article class="message" v-if="errors" :class="isSuccess ? 'is-success':'is-danger'">
      <div class="message-body">
          <p v-for="(error,index) in errors" :key="index">{{error.message}}</p>
      </div>
    </article>

    <!-- title -->

    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" v-model="title" required placeholder="Posiedon wins first place in the music video event...">
      </div>
    </div>

    <!-- house -->
    
    <div class="field">
      <label class="label">House</label>
      <div class="control">
        <div class="select">
          <select v-model="house" required>
            <option>Poseidon</option>
            <option>Phoenix</option>
            <option>Hercules</option>
            <option>Ceasar</option>
          </select>
        </div>
      </div>
    </div>

    <!-- message -->

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" v-model="content" required placeholder="Textarea"></textarea>
      </div>
    </div>

    <!-- points -->

    <div class="field">
      <label class="label">Points</label>
      <div class="control">
        <input class="input" type="number" v-model="points" required placeholder="Enter additional points won">
      </div>
    </div>

    <!-- name -->

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" v-model="name" required placeholder="Your name">
      </div>
    </div>

    <div class="field is-grouped mt-6">
      <div class="control">
        <button class="button is-link" @click="submit">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light" @click="$router.push({name:'Home'})">Back</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {addMessage} from '../api/addMessage'

export default {
  name:'UpdatePoints',
  data(){
    return{
      title:'',
      house:'',
      content:'',
      points:0,
      name:'',
      errors:null,
      isSuccess:false
    }
  },
  methods:{
    submit:async function(){
      if(this.title && this.house && this.content && this.points && this.name){
        console.log('success')
        const message = {
          title:this.title,
          house:this.house,
          content:this.content,
          points:Number(this.points),
          name:this.name
        }
        const error = await addMessage(message)
        this.errors = []
        this.errors.push(error)
        if(error.success) this.isSuccess = true

      }
      else{
        console.log('fail')
      }
    },
  }
}
</script>