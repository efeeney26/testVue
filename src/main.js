import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BasicComponent from '@/containers/BasicComponent'
import AdvancedComponent from '@/containers/AdvancedComponent'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/basic', component: BasicComponent },
  { path: '/advanced', component: AdvancedComponent }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
