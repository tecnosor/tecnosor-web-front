<template>
  <header>
    <div :class="['tecnosor-slogan', { 'minified': minified }]" :style="headerStyle">
      <TecnosorNavbar ref="tecnosorNavbar" :minified="minified" />
      <div v-if="!minified" class="container slogan">
        <div class="columns">
          <div class="column col-8 col-sm-12">
            <div class="slogan-content text-container" :style="textContainerStyle">
              <h1>
                <span class="slogan-bold">
                  {{ t('An IT consulting company') }}
                </span>
              </h1>
              <p>
                {{ t('Transforming Ideas into Digital Solutions: Technology at the Service of Your Business.') }}
              </p>
              <router-link class="btn btn-primary btn-lg btn-start" to="prices">
                {{ t('Start a project today') }}
              </router-link>
            </div>
          </div>
          <div class="column col-4 hide-sm">
            <VueFlux ref="$vueFlux" :options="options" :rscs="rscs" :transitions="transitions" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import TecnosorNavbar from './tecnosor-navbar.vue';
import { ref, shallowReactive, computed } from 'vue';
import { VueFlux, Img, Warp, Swipe, Concentric } from 'vue-flux';
import 'vue-flux/style.css';

const animacionAleatoria = Math.random() < 0.5;
const $vueFlux = ref();

const options = shallowReactive({
  autoplay: true,
  allowFullscreen: false,
  allowToSkipTransition: false,
  aspectRatio: '1:1',
  autohideTime: 1000,
  bindKeys: false,
  delay: 5000,
  enableGestures: false,
  infinite: true,
  lazyLoad: true,
  lazyLoadAfter: 5,
});

const rscs = shallowReactive([
  new Img('/assets/images/ia_it_solutions1.jpeg', 'img 1'),
  new Img('/assets/images/ia_it_solutions2.jpeg', 'img 2'),
  new Img('/assets/images/ia_it_solutions3.jpeg', 'img 3'),
  new Img('/assets/images/ia_it_solutions4.jpeg', 'img 4'),
  new Img('/assets/images/ia_it_solutions5.jpeg', 'img 5'),
  new Img('/assets/images/ia_it_solutions6.jpeg', 'img 6'),
  new Img('/assets/images/ia_it_solutions7.jpeg', 'img 7'),
]);

const transitions = shallowReactive([Warp, Swipe, Concentric]);

const { t } = useI18n();

// Props
const props = defineProps({
  minified: Boolean,
  colorHex: {
    type: String,
    default: '', // Si no se pasa, se usará el gradiente original del CSS
  },
});

// Computed para determinar el estilo del encabezado según el color hexadecimal
const headerStyle = computed(() => {
  if (props.colorHex) {
    return {
      background: props.colorHex + ' !important', // Sobreescribir el fondo con un color fijo
      backgroundImage: 'none !important', // Remover el gradiente si hay un color fijo
    };
  }
  return {}; // Dejar que el gradiente predeterminado del CSS se aplique
});

// Computed para determinar el estilo del texto basado en el color hexadecimal o animaciones
const textContainerStyle = computed(() => {
  if (props.colorHex) {
    return {
      color: props.colorHex, // Aplicar el color fijo al texto
      background: 'none', // Eliminar cualquier fondo gradiente
      WebkitBackgroundClip: 'initial', // Resetear clipping del texto
      backgroundClip: 'initial',
    };
  }
  return {
    backgroundImage: animacionAleatoria
      ? 'linear-gradient(to left, #fda0cc, #ee689b, #c834db, #9354e6, #d0c6fd, #9354e6, #c834db, #ee689b, #fda0cc)'
      : 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,.5) 30px, rgba(255,255,255,.5) 60px)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };
});
</script>

<style scoped>
.vue-flux>div {
  border-radius: 50%;
}

.minified {
  padding-bottom: 0rem;
}

.slogan-content {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.text-container {
  font-size: 1rem;
  transition: background 0.3s ease, color 0.3s ease;
}
</style>
