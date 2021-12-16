import VueRouter from 'vue-router';
import Opgg from "./components/Opgg"

let routes = [
  {
    path: '/opgg',
    name: 'opgg',
    component: Opgg
  }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})