<template>
  <div id="we-work" class="tecnosor-work">
    <div class="container tecnosor-body">
      <div class="columns">
        <div class="column col-12 col-sm-12">
          <h2 class="feature-title">{{t('How we work')}}</h2>
        </div>
        <div class="column col-10 col-sm-12 centered">
          <h2 ref="textoWork" class="tecnosor-work-feature" >
            {{t("Transforming Ideas into Digital Solutions:")}} <span class="tecnosor-work-feature-bold">{{t("Agile")}}</span>, <span class="tecnosor-work-feature-bold two ">{{t("Customised")}}</span>, <span class="tecnosor-work-feature-bold three">{{t("Effective")}}</span>.
          </h2>
          <p :class="['p-inv', {'p-show' : mostrarTextoWork}]" style="font-size: x-large;">
            {{t("we_follow_agile_principles")}}
          </p>
          <p>
            <ul ref="listaElementos" >
              <li v-for="(elemento, index) in items" :key="index" :class="{'show' : elemento.mostrar}" v-html="elemento.text"></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const listaElementos = ref()
const textoWork = ref()
const mostrarTextoWork=ref(false)

const items = ref([{ text: '', mostrar: false }]);

const actualizarItems = () => {
  items.value = [
    { text: '<strong> 1. ' + t('Direct Contact:') + '</strong> ' + t('Start the process by contacting us. Your message is our starting point.'), mostrar: false },
    { text: '<strong> 2. ' + t('Needs Analysis:') + '</strong> ' + t('We delve deeper into your challenges to fully understand what you require.'), mostrar: false },
    { text: '<strong> 3. ' + t('Transparent Proposal:') + '</strong> ' + t('we_present_a_clear_proposal'), mostrar: false },
    { text: '<strong> 4. ' + t('Efficient Development:') + '</strong> ' + t('We immerse ourselves in development and implementation with focus and efficiency.'), mostrar: false },
    { text: '<strong> 5. ' + t('Continuous Maintenance:') + '</strong> ' + t('Our relationship goes beyond implementation, providing you with ongoing support.'), mostrar: false },
  ];
}

const verificarPosicion = () => {
  const posicionElemento = textoWork.value.offsetTop
  const alturaElemento = textoWork.value.clientHeight
  const posicionVentana = window.scrollY
  const alturaVentana = window.innerHeight
  const mitadPagina = posicionVentana + alturaVentana / 2;
  mostrarTextoWork.value = (posicionElemento < mitadPagina && posicionElemento + alturaElemento > posicionVentana)

  items.value.forEach((item, index) => {
    const elemento = listaElementos.value.children[index]
    const posicionElemento = elemento.offsetTop
    const alturaElemento = elemento.clientHeight

    const posicionVentana = window.scrollY
    const alturaVentana = window.innerHeight
    const mitadPagina = posicionVentana + alturaVentana / 2 + 100;

    items.value[index].mostrar = posicionElemento < mitadPagina && posicionElemento + alturaElemento > posicionVentana
  })
}

onMounted(() => {
  window.addEventListener('scroll', verificarPosicion);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', verificarPosicion);
})

watch( locale, () => {
  actualizarItems();
});

actualizarItems();

</script>
<style scoped>
/* How We Work */

.tecnosor-work {
    padding: 4rem 0 1rem 0;
    background: #2c1933;
    color: #fff;
    background-size: cover;
}

.tecnosor-work-feature-bold {
    color: #b588df;
}
.two {
    color: #df88d4;
}
.three {
    color: #df889b;
}

.tecnosor-work-img img {
    width: 300px;
}

.tecnosor-work .tecnosor-work-feature {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.3;
    text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left; /* Alineación a la derecha */
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

li {
    margin-bottom: 10px;
    opacity: 0;
    padding-left: 15px;
    transform: translateY(50px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

li.show {
    opacity: 1;
    transform: translateY(0);
}

.p-inv {
    margin-bottom: 10px;
    opacity: 0;
    padding-left: 15px;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.p-show {
    opacity: 1;
}


</style>
