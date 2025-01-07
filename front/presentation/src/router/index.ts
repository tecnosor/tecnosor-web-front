import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/landing-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingView
    },
    {
      path: '/prices',
      name: 'Precios',
      component: () => import('../views/tecnosor-prices-consulting.vue')
    },
    {
      path: '/service-offer',
      name: 'Service Offer',
      component: () => import('../views/tecnosor-we-do-view.vue')
    },
    {
      path: '/contact-form',
      name: 'Contact Form',
      component: () => import('../views/tecnosor-contact-form-view.vue')
    },
    {
      path: '/legal/policies',
      name: 'Policies',
      component: () => import('../views/tecnosor-policies.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash, // Usa el selector CSS del hash (#we-do)
        behavior: 'smooth', // Desplazamiento suave (opcional)
      };
    }
    return { top: 0 }; // Por defecto, desplázate al inicio
  },
})

export default router
