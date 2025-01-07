<template>
  <div id="we-do" class="tecnosor-do">
    <div class="container tecnosor-body">
      <div class="columns">
        <div class="column col-12">
          <h2 class="feature-title">{{ t('What We Do') }}</h2>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/question_answer_black_48dp.svg" alt="" />
            <h3>{{ t('Independent Consulting') }}</h3>
            <div class="hidden-text">
            <p>
              {{ t('que_hacemos_consultoria_independiente_breve_descripcion') }}
            </p>
            <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/logo_dev_black_48dp.svg" alt="" />
            <h3>{{ t('Custom Software Development') }}</h3>
            <div class="hidden-text">
            <p>
              {{ t('custom_software_development_description') }}
            </p>
            <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/menu_book_black_48dp.svg" alt="" />
            <h3>{{ t('Training and Education') }}</h3>
            <div class="hidden-text">
            <p>
              {{ t('training_and_education_description') }}
            </p>
            <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/developer_mode_black_48dp.svg" alt="" />
            <h3>{{ t('Mobile Application Development') }}</h3>
            <div class="hidden-text">
            <p>
              {{ t('mobile_application_development_description') }}
            </p>
            <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/currency_exchange_black_48dp.svg" alt="" />
            <h3>{{ t('Business Process Automation') }}</h3>
            <div class="hidden-text">
            <p>
              {{ t('business_process_automation_description') }}
            </p>
            <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/wb_cloudy_black_48dp.svg" alt="" />
            <h3>{{ t('Cloud Services') }}</h3>
            <div class="hidden-text">
            <p>
              {{ t('cloud_services_description') }}
            </p>
            <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/web_black_48dp.svg" alt="" />
            <h3>{{ t('Website Development') }}</h3>
            <div class="hidden-text">
            <p>
              {{ t('website_development_description') }}
            </p>
            <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/sync_alt_black_48dp.svg" alt="" />
            <h3>{{ t('API Development') }}</h3>
            <div class="hidden-text">
            <p>
              {{ t('api_development_description') }}
            </p>
            <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/construction_black_48dp.svg" alt="" />
            <h3>{{ t('Maintenance and Support Services') }}</h3>
            <div class="hidden-text">
              <p>
                {{ t('maintenance_and_support_services_description') }}
              </p>
              <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/insert_chart_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
            <h3>{{ t('Data Analysis and Reporting') }}</h3>
            <div class="hidden-text">
              <p>
                {{ t('data_analysis_and_reporting_description') }}
              </p>
              <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/code_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
            <h3>{{ t('DevOps') }}</h3>
            <div class="hidden-text">
              <p>
                {{ t('devops_description') }}
              </p>
              <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="tecnosor-do-content">
            <img src="@/assets/icons/neurology_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
            <h3>{{ t('AI: Artificial Intelligence Systems Integration') }}</h3>
            <div class="hidden-text">
              <p>
                {{ t('ai_systems_integration_description') }}
              </p>
              <router-link :to="{ path: '/', hash: '#we-do' }">{{ t('Learn more') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  minified: Boolean
})

</script>
<style scoped>


/* What We Do */

.tecnosor-do {
    padding: 3rem 0 4rem 0;
    text-align: center;
}


.tecnosor-do-content {
  overflow: hidden;
}

.hidden-text {
  max-height: 0px; /* Altura máxima del párrafo oculto */
  overflow: hidden;
  transition: max-height 0.3s ease; /* Animación de transición */
}

.tecnosor-do-content:hover .hidden-text {
  max-height: 1000px; /* Altura máxima al hacer hover */
}
.tecnosor-do .tecnosor-do-content {
    padding: 0 1rem;
}

.tecnosor-do img {
    max-height: 60px;
}

.tecnosor-do h3 {
    font-size: .9rem;
    font-weight: 700;
    padding: 1rem 0 .1rem 0;
}

.tecnosor-do p {
    font-size: .8rem;
    font-weight: 400;
    opacity: .8;
}

.tecnosor-do a {
    color: #382CBE;
}


</style>
