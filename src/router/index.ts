import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tables from '@/views/TablesView.vue'
import ContactView from '@/views/ContactView.vue'
import PriceView from '@/views/PriceView.vue'
import AboutView from '@/views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',       
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/TablesView',
      name: 'TablesView',
      component: Tables,
    },

    {
      path: '/ContactView',
      name: 'ContactView',
      component: ContactView
    },

    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    },
       {
      path: '/PriceView',
      name: 'PriceView',
      component: PriceView
    },
    {
      path: '/PrivacyPolicyView',
      name: 'PrivacyPolicyView',
      component: () => import('../views/PrivacyPolicyView.vue') 
    },
    {
      path: '/RulesView',
      name: 'RulesView',
      component: () => import('../views/RulesView.vue') 
    }
  ],
})

export default router
