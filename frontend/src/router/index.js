import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/inicial',
      name: 'inicial',
      component: () => import('../views/InicialView.vue')
    },
    {
      path: '/poker-face',
      name: 'pokerFace',
      component: () => import('../views/PokerFaceView.vue')
    },
    {
      path: '/feliz',
      name: 'happy',
      component: () => import('../views/HappyView.vue')
    },
    {
      path: '/triste',
      name: 'sad',
      component: () => import('../views/SadView.vue')
    }
  ]
})

export default router
