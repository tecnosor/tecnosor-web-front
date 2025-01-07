<template>
  <div>
    <TecnosorHeader :minified="true"/>
    <TecnosorWeDo/>
    <TecnosorFoother/>
  </div>
</template>
<script setup lang="ts">
import TecnosorHeader from '../components/tecnosor-header.vue'
import TecnosorWeDo from '../components/tecnosor-we-do.vue'
import TecnosorFoother from '../components/tecnosor-foother.vue'
</script>
<style scoped></style>
