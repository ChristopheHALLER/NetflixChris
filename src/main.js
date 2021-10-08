import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import MovieCreation from './components/MovieCreation.vue'
import Movie from './components/Movie.vue'
import HelloWorld from './components/HelloWorld.vue'


Vue.use(VueRouter)



Vue.config.productionTip = false




const routes = [
  { path: '/',
  name: 'Home',
  component: HelloWorld,
  props:true,
},
  { path: '/admin',
   name: 'Admin',
   component: MovieCreation,
   props:true,
},
  {path: 'movie/:id',
  name:'Movie',
  component:Movie ,
  props:true,
  }

]
const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
  routes // short for routes: routes
})
new Vue({
  render: h => h(App),
  router,
  vuetify,
 }).$mount('#app');









