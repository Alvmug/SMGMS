import { createRouter, createWebHistory } from 'vue-router'
import Teachers from '@/components/Teachers.vue'
import WelcomePage from '@/components/WelcomePage.vue'
import Student from '@/components/Student.vue'
import Admin from '@/components/Admin.vue'
import Start from '@/components/Start.vue'
import HM from '@/components/HM.vue'
import DoS from '@/components/DoS.vue'
import Secretary from '@/components/Secretary.vue'
import Accountant from '@/components/Accountant.vue'
import Mentron from '@/components/Mentron.vue'

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
    {
      path: '/HM',
      name: 'HM',
      component: HM,
    },
    {
      path: '/DoS',
      name: 'DoS',
      component: DoS,
    },
    {
      path: '/Secretary',
      name: 'Secretary',
      component: Secretary,
    },
    {
      path: '/Mentron',
      name: 'Mentron',
      component: Mentron,
    },
    {
      path: '/Accountant',
      name: 'Accountant',
      component: Accountant,
    },
  ],
})

export default router
