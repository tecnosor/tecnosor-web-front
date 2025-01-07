<template>
  <div class="container tecnosor-header">
    <div class="columns">
      <div class="column col-12">
        <header class="navbar">
          <section class="navbar-section">
            <router-link class="navbar-brand logo" to="/">
              <img class="logo-img logo-med" src="@/assets/tecnosor.png" alt="Tecnosor Logo" /><span
                class="span-med"
                >Tecnosor</span
              >
            </router-link>
          </section>
          <section class="navbar-section">
            <router-link v-if="minified" class="btn btn-link" :to="{name: 'Landing'}">{{charminor + t('Home') }}</router-link>
            <router-link v-if="!minified" class="btn btn-link hide-sm" to="#we-do">{{ t('What we do') }}</router-link>
            <router-link v-if="!minified" class="btn btn-link hide-sm" to="#we-work">{{ t('How we work') }}</router-link>
            <router-link v-if="!minified" class="btn btn-link hide-sm" to="#price">{{ t('Pricing') }}</router-link>
            <router-link v-if="!minified" class="btn btn-link hide-sm" to="#team">{{ t('Our Team') }}</router-link>
            <LanguajeSwitcher/>
          </section>
        </header>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import { useI18n } from 'vue-i18n'
import LanguajeSwitcher from './languaje-switcher.vue'
const charminor = '«'
const { t } = useI18n()
const props = defineProps({
  minified: Boolean
})

</script>
<style scoped>
.logo-med {
  height: 34px;
}
.span-med {
  font-size: 1.4em;
}

@media (max-width: 850px) {
  .navbar .navbar-section {
    align-items: flex-end;
    display: flex;
    display: -ms-flexbox;
    -ms-flex: 1 0 0;
    flex: 1 0 0;
    -ms-flex-align: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>
