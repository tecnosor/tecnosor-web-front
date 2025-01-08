<template>
  <div>
    <TecnosorHeader :minified="true" :colorHex="'#755a89'" />
    <div class="tecnosor-policies panel">
      <h2>{{t('policies.notice')}}</h2>

      <section id="privacy" class="policy-section">
        <h3>{{t('policies.privacy')}}</h3>
        <p>
          {{t('policies.data.collection.desc')}}
        </p>
      </section>

      <section id="cookies" class="policy-section">
        <h3>{{t('policies.cookie')}}</h3>
        <p>
          {{t('policies.cookies.usage.desc')}}
        </p>
      </section>

      <section id="copyright" class="policy-section">
        <h3>{{t('policies.copyright')}}</h3>
        <p>
          {{t('policies.content.copyright.desc')}}
        </p>
      </section>

      <section id="legal-mentions" class="policy-section">
        <h3>{{t('policies.legal')}}</h3>
        <p>
          {{t('policies.website.legal.desc')}}
        </p>
      </section>
    </div>
    <TecnosorFoother />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import TecnosorHeader from '../components/tecnosor-header.vue'
import TecnosorFoother from '../components/tecnosor-foother.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()

function goBack() {
  router.go(-1) // Navigate back to the previous page
}
</script>

<style scoped>
.tecnosor-policies {
  margin: 10pt;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  color: #333;
}

.tecnosor-policies h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #222;
}

.policy-section {
  margin-bottom: 20px;
}

.policy-section h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #444;
}

.policy-section p {
  font-size: 16px;
  line-height: 1.6;
}

.back-button {
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
