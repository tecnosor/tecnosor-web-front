<template>
  <div>
    <TecnosorIntro v-if="!introComplete" @intro-complete="onIntroComplete" />
    <RouterView v-else />
  </div>
</template>
<script setup lang="ts">
import TecnosorIntro from '@/components/tecnosor-intro.vue'
import { ref } from 'vue'

const introComplete = ref(false)
const onIntroComplete = () => {
  introComplete.value = true;
}
</script>
