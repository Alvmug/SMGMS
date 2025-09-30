import { createRouter, createWebHistory } from 'vue-router'
import Teachers from '@/components/Teachers.vue'
import WelcomePage from '@/components/WelcomePage.vue'
import Student from '@/components/Student.vue'
import Admin from '@/components/Admin.vue'
import Start from '@/components/Start.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomePage,
    },
    {
      path: '/Start',
      name: 'Start',
      component: Start,
    },
    {
      path: '/Teachers',
      name: 'Teachers',
      component: Teachers,
    },
    {
      path: '/Student',
      name: 'Student',
      component: Student,
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
    },
  ],
})

export default router
