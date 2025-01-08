<template>
  <div v-if="!cookies.accepted" class="cookie-overlay">
    <div class="cookie-consent">
      <p>
        {{t('cookies.desc')}}
        <a href="/politica-de-privacidad">{{t('cookies.politica')}}</a>
      </p>
      <button @click="cookies.acceptCookies">{{t('cookies.accept')}}</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// TODO HREF CON ROUTER
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue';
import { useCookiesStore } from '@/stores/cookies.ts'

const cookies = useCookiesStore()
const { t } = useI18n()

onMounted(() => {
  if (!cookies.checkCookies()) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.cookie-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: end;
  overflow: hidden;
}

.cookie-consent {
  padding: 12px;
  background-color: #fff;
  width: 100%;
  border-radius: 0px;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.cookie-consent p {
  margin: 0;
}

.cookie-consent a {
  color: #3498db;
  text-decoration: underline;
}

.cookie-consent button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #6f42c1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cookie-consent button:hover {
  background-color: #532b94;
}
</style>