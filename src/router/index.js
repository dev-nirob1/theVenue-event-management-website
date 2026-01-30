import { createRouter, createWebHistory } from 'vue-router'
import { front_routes } from '../zems/Front/front_routes'

const routes = [
  ...front_routes,
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../zems/Front/Pages/DashboardPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
