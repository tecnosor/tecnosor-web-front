import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '../views/landing-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingView,
      meta: { transition: false }  // Ruta que tendrá la transición
    },
    {
      path: '/prices',
      name: 'Precios',
      component: () => import('../views/tecnosor-prices-consulting.vue'),
      meta: { transition: true }  // Ruta que tendrá la transición
    },
    {
      path: '/service-offer',
      name: 'Service Offer',
      component: () => import('../views/tecnosor-we-do-view.vue'),
      meta: { transition: false }  // No tendrá la transición
    },
    {
      path: '/contact-form',
      name: 'Contact Form',
      component: () => import('../views/tecnosor-contact-form-view.vue'),
      meta: { transition: false }  // Ruta que tendrá la transición
    },
    {
      path: '/legal/policies',
      name: 'Policies',
      component: () => import('../views/tecnosor-policies.vue'),
      meta: { transition: true }  // No tendrá la transición
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

// Función para animar la transición de desvanecimiento (entrada)
function fadeTransitionIn() {
  let opacity = '0.75';
  document.body.style.transition = 'opacity 0.15s ease'; 
  document.body.style.opacity = opacity;
  setTimeout(() => {
    opacity = '1';
    document.body.style.opacity = opacity;
  }, 0);
}

// Función para animar la transición de desvanecimiento (salida)
function fadeTransitionOut() {
  let opacity = '1';
  document.body.style.transition = 'opacity 0.15s ease';
  document.body.style.opacity = opacity;
  setTimeout(() => {
    opacity = '0.75';
    document.body.style.opacity = opacity;
  }, 0);
}

router.beforeEach((to, from, next) => {
  if (to.meta.transition) {
    fadeTransitionOut();
    setTimeout(() => {
      next();
    }, 150);  
  } else {
    next();
  }

});

router.afterEach((to) => {
  if (to.meta.transition) {
    setTimeout(() => {
      fadeTransitionIn();
    }, 500);
  }
});

export default router;
