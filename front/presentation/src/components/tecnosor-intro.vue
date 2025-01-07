<template>
  <div id="intro-container">
    <div id="logo" class="logo-animation">Tecnosor</div>
    <div id="welcome" class="welcome-animation">By Alfonso Soria💻</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'

const logoAnimation = ref(false)
const emit = defineEmits(['intro-complete'])

onMounted(() => {
  setTimeout(() => {
    logoAnimation.value = true
    emit('intro-complete')
  }, 2500)
})
</script>

<style scoped>
#welcome {
  font-size: 2em;
  color: #ecf0f1;
  margin-bottom: 10px;
}

#intro-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #8e44ad;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

#logo {
  font-size: 4em;
  font-weight: bold;
  color: #fff;
}

.welcome-animation {
  animation: welcomea 0.8s ;
}

@keyframes welcomea {
  0% {
    transform: translateX(50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.logo-animation {
  animation: logoa 1.8s ;
}

@keyframes logoa {
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
</style>
