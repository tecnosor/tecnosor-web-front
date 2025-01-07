
<template>
  <div class="tecnosor-client">
    <div class="container tecnosor-client-list">
      <div class="columns">
        <div class="column col-12">
          <h3 class="feature-title">{{ t('we_work_with_the_best_tech') }}</h3>
          <div ref="listaElementos" class="client-logo">
            <a v-for="(image, index) in images" :key="index" :class="{'show' : image.mostrar}" target="_blank">
              <img
                ref="clientLogo"
                :src="'/assets/images/tecnologias/' + image.img"
                height="40px"
                alt=""
                class="fade-in"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, onMounted, onUnmounted } from 'vue';
const { t } = useI18n();
const images = ref([
  { img: "kubernetes.png", mostrar: false }, 
    {
        "img": "hvault.png",
        "mostrar": false
    },
    {
        "img": "azure.svg",
        "mostrar": false
    },
    {
        "img": "aws.svg",
        "mostrar": false
    },
    {
        "img": "ibmc.png",
        "mostrar": false
    },
    {
        "img": "dynatrace.svg",
        "mostrar": false
    },
    {
        "img": "docker.png",
        "mostrar": false
    },
    {
        "img": "splunk-inc.png",
        "mostrar": false
    },
    {
        "img": "mongo.png",
        "mostrar": false
    },
    {
        "img": "oracle.png",
        "mostrar": false
    },
    {
        "img": "axway.png",
        "mostrar": false
    },
    {
        "img": "apigee.svg",
        "mostrar": false
    },
    {
        "img": "swift.svg",
        "mostrar": false
    },
    {
        "img": "ionic-logo.avif",
        "mostrar": false
    },
    {
        "img": "vuejs.png",
        "mostrar": false
    },
    {
        "img": "net.png",
        "mostrar": false
    },
    {
        "img": "kafka.png",
        "mostrar": false
    },
    {
        "img": "postgresql-logo.png",
        "mostrar": false
    },
    {
        "img": "jenkins.png",
        "mostrar": false
    },
    {
        "img": "git.png",
        "mostrar": false
    },
    {
        "img": "sonarqube-logo.png",
        "mostrar": false
    },
    {
        "img": "iqserver.svg",
        "mostrar": false
    },
    {
        "img": "fortify.png",
        "mostrar": false
    },
    {
        "img": "stripe.svg",
        "mostrar": false
    },
    {
        "img": "drupal.png",
        "mostrar": false
    },
    {
        "img": "wordpress-logo.svg",
        "mostrar": false
    }
])
const listaElementos = ref()
const verificarPosicion = () => {
  images.value.forEach((item, index) => {
    const elemento = listaElementos.value.children[index]
    const posicionElemento = elemento.offsetTop
    const alturaElemento = elemento.clientHeight

    const posicionVentana = window.scrollY
    const alturaVentana = window.innerHeight
    const mitadPagina = posicionVentana + alturaVentana / 2 + 100;

    images.value[index].mostrar = posicionElemento < mitadPagina && posicionElemento + alturaElemento > posicionVentana
  })
}

onMounted(() => {
  window.addEventListener('scroll', verificarPosicion);
});

onUnmounted(() => {
  window.removeEventListener('scroll', verificarPosicion);
});
</script>

<style scoped></style>

<style scoped>

a {
    margin-bottom: 10px;
    opacity: 0;
    padding-left: 15px;
    transform: translateX(-60px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

a.show {
    opacity: 1;
    transform: translateX(0);
}

</style>