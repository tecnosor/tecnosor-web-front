<template>
  <header>
    <div :class="['tecnosor-slogan', {'minified': minified}]">
      <TecnosorNavbar ref="tecnosorNavbar" :minified="minified"/>
      <div v-if="!minified" class="container slogan">
        <div class="columns">
          <div class="column col-8 col-sm-12">
            <div class="slogan-content text-container">
              <h1>
                <span :class="['slogan-bold', { 'text-gradient': animacionAleatoria }, { 'text-pattern' :  !animacionAleatoria }]">{{ t('An IT consulting company') }}</span>
              </h1>
              <p>
                {{ t('Transforming Ideas into Digital Solutions: Technology at the Service of Your Business.') }}
              </p>
              <router-link class="btn btn-primary btn-lg btn-start" to="prices">{{ t('Start a project today') }}</router-link> <!-- TODO: CORREO A SOPORTE TECNOSOR -->
            </div>
          </div>
          <div class="column col-4 hide-sm">
            <VueFlux
              ref="$vueFlux"
              :options="options"
              :rscs="rscs"
              :transitions="transitions">
            </VueFlux>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TecnosorNavbar from './tecnosor-navbar.vue'
import { ref, shallowReactive } from 'vue';
import {
	VueFlux,
	Img,
	Warp,
  Swipe,
  Concentric
} from 'vue-flux';
import 'vue-flux/style.css'
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
  new Img( '/assets/images/ia_it_solutions1.jpeg', 'img 1' ),
  new Img( '/assets/images/ia_it_solutions2.jpeg', 'img 2' ),
  new Img( '/assets/images/ia_it_solutions3.jpeg', 'img 3' ),
  new Img( '/assets/images/ia_it_solutions4.jpeg', 'img 4' ),
  new Img( '/assets/images/ia_it_solutions5.jpeg', 'img 5' ),
  new Img( '/assets/images/ia_it_solutions6.jpeg', 'img 6' ),
  new Img( '/assets/images/ia_it_solutions7.jpeg', 'img 7' )
]);

const transitions = shallowReactive([Warp,Swipe,Concentric]);

const { t } = useI18n()
const props = defineProps({
  minified: Boolean
})
</script>
<style>
.vue-flux>div  {
  border-radius: 50%;
}

.text-container .text-gradient {  
  color: transparent;
  background-image: linear-gradient(to left, #fda0cc, #ee689b, #c834db, #9354e6, #d0c6fd, #9354e6, #c834db, #ee689b, #fda0cc);
  webkit-background-clip: text;
  background-clip: text;
  animation: color 12s linear infinite; 
  background-size: 500%;  
  -webkit-transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;
}

.text-container .text-pattern {  
  color: transparent;
  background-color: #db6ec4;
  background-image: repeating-linear-gradient(45deg,    transparent, transparent 30px,        rgba(255,255,255,.5) 30px, rgba(255,255,255,.5) 60px);
   -webkit-background-clip: text;
    background-clip: text;   
  animation: color 110s linear infinite; 
  background-size: 200%;  
  -webkit-transform: translate3d(0,0,0);
    -webkit-backface-visibility: hidden;
}

.minified {
  padding-bottom: 0rem;
}

@keyframes color {
  from { 
    background-position: 0% 50%;
  }
  to { 
    background-position: 100% 50%; 
  }
}
</style>
