import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '../views/landing-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingView,
      meta: { transition: true }
    },
    {
      path: '/prices',
      name: 'Precios',
      component: () => import('../views/tecnosor-prices-consulting.vue'),
      meta: { transition: true }
    },
    {
      path: '/service-offer',
      name: 'Service Offer',
      component: () => import('../views/tecnosor-we-do-view.vue'),
      meta: { transition: false }
    },
    {
      path: '/contact-form',
      name: 'Contact Form',
      component: () => import('../views/tecnosor-contact-form-view.vue'),
      meta: { transition: false }
    },
    {
      path: '/legal/policies',
      name: 'Policies',
      component: () => import('../views/tecnosor-policies.vue'),
      meta: { transition: true }
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

// Función para animar la transición de desplazamiento hacia la izquierda (entrada)
function slideTransitionIn() {
  document.body.style.transition = 'transform 0.1s linear';
  document.body.style.transform = 'translateY(3%)'; // Empieza fuera de la pantalla, hacia la derecha
  setTimeout(() => {
    document.body.style.transform = 'translateY(0%)'; // Se desliza hacia su posición original
  }, 0);
}

// Función para animar la transición de desplazamiento hacia la izquierda (salida)
function slideTransitionOut() {
  document.body.style.transition = 'transform 0.1s linear';
  document.body.style.transform = 'translateY(0%)'; // Comienza en su posición original
  setTimeout(() => {
    document.body.style.transform = 'translateY(-3%)'; // Se desliza hacia fuera de la pantalla, a la izquierda
  }, 0);
}

router.beforeEach((to, from, next) => {
  // Verificamos si to.meta.transition está definido o si hay que realizar la transición hacia/desde 'Landing'
  if (to.meta.transition && 
      from.name != undefined &&
      from.name !== to.name) {
    slideTransitionOut();
    setTimeout(() => {
      next();
    }, 100);  
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // Igual que en beforeEach, consideramos valores undefined
  if (to.meta.transition && 
      from.name != undefined &&
      from.name !== to.name) {
    setTimeout(() => {
      slideTransitionIn();
    }, 100);
  }
});

export default router;
