import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Eventos from '../views/Eventos.vue'
import Login from '../views/Login.vue'
import CriarConta from '../views/CriarConta.vue'
import CriarEvento from '../views/CriarEvento.vue'
import CriarPost from '../views/CriarPost.vue'
import EditarEvento from '../views/EditarEvento.vue'
import EditarPost from '../views/EditarPost.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: Eventos
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/CriarConta',
    name: 'CriarConta',
    component: CriarConta
  },
  {
    path: '/post/editar/:id',
    name: 'EditarPost',
    component: EditarPost,
  },
  {
    path: '/post/criar',
    name: 'CriarPost',
    component: CriarPost,
  },
  {
    path: '/evento/editar/:id',
    name: 'EditarEvento',
    component: EditarEvento,
  },
  {
    path: '/evento/criar',
    name: 'CriarEvento',
    component: CriarEvento,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router