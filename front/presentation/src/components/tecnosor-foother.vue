<template>
  <div class="tecnosor-footer">
    <div class="container">
      <div class="columns">
        <div class="column col-3 col-sm-6">
          <div class="tecnosor-footer-content">
            <h4>{{ t('Services') }}</h4>
            <ul class="nav">
              <li class="nav-item">
                <router-link to="/#price">{{ t('Consulting') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/#price">{{ t('Development') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/#price">{{ t('IT Support') }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="column col-3 col-sm-6">
          <div class="tecnosor-footer-content">
            <h4>{{ t('Clients') }}</h4>
            <ul class="nav">
              <li class="nav-item">
                <router-link to="/#we-do">{{ t('Our Offer') }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="column col-3 col-sm-6">
          <div class="tecnosor-footer-content">
            <h4>{{ t('Contact') }}</h4>
            <ul class="nav">
              <li class="nav-item">
                <a href="mailto:soporte@tecnosor.es">soporte@tecnosor.es</a>
              </li>
              <li class="nav-item">
                <a href="https://www.linkedin.com/in/alfonso-soria/">{{ t('LinkedIn') }}</a>
              </li>
              <li class="nav-item">
                <a href="https://github.com/tecnosor">{{ t('GitHub') }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column col-3 col-sm-6">
          <div class="tecnosor-footer-content">
            <h4>{{ t('Legal & Copyright') }}</h4>
            <ul class="nav">
              <li class="nav-item">
                <router-link to="/legal/policies#cookies">{{ t('Cookie Policy') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/legal/policies#privacy">{{ t('Privacy Policy') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/legal/policies#copyright">{{ t('Copyright Policy') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/legal/policies#legal-mentions">{{ t('Legal Mentions') }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CookiesPolicyUi/>
    </div>
  </div>
</template>

<script setup lang="ts">
import CookiesPolicyUi from './cookies-policy-ui.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style></style>
