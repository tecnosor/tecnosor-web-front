<template>
  <div>
    <TecnosorHeader :minified="true"/>
    <TecnosorPrice :completo="true" class="container-view"/>
    <!-- TODO. DETALLAR AQUI MEJOR LOS PLANES Y CONDICIONES -->
    <TecnosorFoother/>
  </div>
</template>
<script setup lang="ts">
import TecnosorHeader from '../components/tecnosor-header.vue'
import TecnosorPrice from '../components/tecnosor-price.vue'
import TecnosorFoother from '../components/tecnosor-foother.vue'
</script>
<style scoped>
.container-view {
  padding: 50px;
}
</style>
