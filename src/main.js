import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

require('@/assets/main.scss')

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCledp6rdDtEiZygl-oPiKrf_v5cbXO1KY",
  authDomain: "lsb-leaderboard.firebaseapp.com",
  databaseURL: "https://lsb-leaderboard.firebaseio.com",
  projectId: "lsb-leaderboard",
  storageBucket: "lsb-leaderboard.appspot.com",
  messagingSenderId: "568167360548",
  appId: "1:568167360548:web:40d9e90747e81ad42e50b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
