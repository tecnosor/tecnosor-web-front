<template>
  <div>
    <TecnosorHeader :minified="true" :colorHex="'#755a89'" />
    <TecnosorPrice :completo="true" class="container-view" />
    <TecnosorFoother />
  </div>
</template>

<script setup lang="ts">
import TecnosorHeader from '../components/tecnosor-header.vue'
import TecnosorPrice from '../components/tecnosor-price.vue'
import TecnosorFoother from '../components/tecnosor-foother.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.container-view {
  padding: 50px;
}

section {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

section h2, section h3 {
  color: #333;
}

section ul {
  margin-left: 20px;
  list-style: disc;
}
</style>