<template>
  <div>
    <TecnosorHeader :minified="false"/>
    <TecnosorWeDo/>
    <TecnosorClient/>
    <TecnosorWeWork/>
    <TecnosorPrice :completo="false"/>
    <TecnosorTeam/>
    <TecnosorOpenSource/>
    <TecnosorFoother/>
  </div>
</template>
<script setup lang="ts">
import TecnosorHeader from '../components/tecnosor-header.vue'
import TecnosorWeDo from '../components/tecnosor-we-do.vue'
import TecnosorWeWork  from '../components/tecnosor-we-work.vue'
import TecnosorPrice from '../components/tecnosor-price.vue'
import TecnosorClient from '../components/tecnosor-client.vue'
import TecnosorTeam from '../components/tecnosor-team.vue'
import TecnosorOpenSource from '../components/tecnosor-open-source.vue'
import TecnosorFoother from '../components/tecnosor-foother.vue'

</script>

<style scoped>

</style>
