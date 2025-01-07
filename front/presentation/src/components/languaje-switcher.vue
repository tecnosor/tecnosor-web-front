<template>
  <div class="language-switcher">
    <form action="">
      <select id="language-picker-select" v-model="idiomaActual" class="mui-select">
        <option v-for="local in t.availableLocales" :key="local" :value="local" :selected="local === idiomaActual">
          {{ local }}
        </option>
      </select>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const t = useI18n()
const idiomaActual = ref(t.locale.value)

watch(idiomaActual, (newvalue: string) => {
  t.locale.value = newvalue
})
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
}

.mui-select {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

.mui-select:focus {
  border-color: #89a9ca;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}
</style>