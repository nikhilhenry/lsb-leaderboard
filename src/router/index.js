import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta:{
      requiresGuest:true
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/update_points',
    name: 'UpdatePoints',
    meta:{
      requiresAuth:true
    },
    component: () => import('../views/UpdatePoints.vue')
  }
]

const router = new VueRouter({
  routes,
})

//Nav guards
router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    //Check if No logged user
    if(!firebase.auth().currentUser){
      next({
        path:'/login',
        query:{
          redirect: to.fullPath
        }
      });
    }
    else{
      next();
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)){
    if(firebase.auth().currentUser){
      next({
        path:'/',
        query:{
          redirect: to.fullPath
        }
      });
    }
    else{
      next();
    }
  }
  else{
    next();
  }
})


export default router
