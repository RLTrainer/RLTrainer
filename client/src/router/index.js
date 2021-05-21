// createWebHashHistory might not be a good alternative to createWebHistory
// This can be reverted if the build still fails
import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '@components/pages/Homepage.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/track',
    name: 'Track',
    component: () => import('../views/Track.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router




