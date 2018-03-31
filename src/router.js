/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// const Home = require('./home.vue');
// const My = require('./my.vue');
import Home from '@/home.vue'
import My from '@/my.vue'
Vue.use(Router)

module.exports = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    { path: '/', component: Home },
    { path: '/my', component: My }
  ]
})
