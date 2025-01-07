<template>
  <div id="price" :class="['tecnosor-price', { 'tecnosor-price-completo': completo }]">
    <div v-if="completo" class="container tecnosor-body" style="text-align: left">
      <h1>{{ t('price.title') }}</h1>
      <h2>{{ t('price.detailedBillingManagement') }}</h2>
      <p>{{ t('price.billingDescription') }}</p>
      <p>{{ t('price.moreInfo') }}</p>
      <p style="font-size: smaller">
        <i>{{ t('price.note1') }}</i>
        <br />
        <i>{{ t('price.note2') }}</i>
        <br />
        <i>{{ t('price.note3') }}</i>
        <br />
        <i>{{ t('price.note4') }}</i>
      </p>
    </div>
    <div class="container tecnosor-body col-sm-12">
      <div class="columns">
        <div class="column col-4 col-sm-12">
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title"><span>{{ t('price.microConsulting.title') }}</span></div>
            </div>
            <div class="panel-body">
              <p><span>{{ t('price.microConsulting.from') }}</span><span class="price">700{{ t('currency') }}</span></p>
              <ul>
                <li><strong>24</strong>{{ t('price.microConsulting.includedHours') }}</li>
                <li>{{ t('price.despues') }} <strong>50{{ t('currency') }}</strong> {{ t('price.per_additional_hour') }}</li>
                <li>{{t('price.microConsulting.minimumCostDetails')}}</li>
              </ul>
              <p style="font-size: smaller">
                <i>{{ t('price.note4')}}</i>
              </p>
            </div>
            <div class="panel-footer">
              <button class="btn btn-primary btn-price">{{t('contactUs')}}</button>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title"><span>{{t('price.projectDevelopment.title')}}</span></div>
            </div>
            <div class="panel-body">
              <h3>{{t('price.projectDevelopment.complexityAndTime')}}</h3>
              <ul>
                <li>
                  <strong>{{t('price.projectDevelopment.minorProjects')}} </strong> {{t('price.projectDevelopment.proyectosDeHasta')}} 40MD. {{t('price.projectDevelopment.costPerMD')}}
                  360{{ t('currency') }}.
                </li>
                <li>
                  <strong>{{t('price.projectDevelopment.mediumProjects')}} </strong> {{t('price.projectDevelopment.proyectosDeHasta')}} 100MD. {{t('price.projectDevelopment.costPerMD')}}
                  320{{ t('currency') }}.
                </li>
                <li>
                  <strong>{{t('price.projectDevelopment.bigProjects')}} </strong> {{t('price.projectDevelopment.proyectosDeMas')}} 100MD. {{t('price.projectDevelopment.costPerMD')}}
                  290{{ t('currency') }}.
                </li>
              </ul>
              <p style="font-size: smaller">
                <i>{{ t('price.note4')}}</i>
              </p>
            </div>
            <div class="panel-footer">
              <button class="btn btn-primary btn-price">{{t('contactUs')}}</button>
            </div>
          </div>
        </div>
        <div class="column col-4 col-sm-12">
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title"><span>{{t('price.itSupport.title')}}</span></div>
            </div>
            <div class="panel-body">
              <p>
                <span class="price">450{{ t('currency') }} </span>
                <span>/ mes</span>
              </p>
              <ul>
                <li><strong>16</strong> {{t('price.microConsulting.includedHours')}}</li>
                <li>{{ t('price.despues') }} <strong>50{{ t('currency') }}</strong> {{ t('price.per_additional_hour') }}</li>
                <li>{{t('price.itSupport.onlineSupport')}}</li>
                <li>{{t('price.itSupport.inPersonSupport')}}</li>
              </ul>
              <p style="font-size: smaller">
                <i>{{ t('price.note4')}}</i>
              </p>
            </div>
            <div class="panel-footer">
              <button class="btn btn-primary btn-price">{{t('contactUs')}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!completo"
      :class="['container', 'tecnosor-body', { 'tecnosor-body-completo': !completo }]"
    >
      <router-link to="prices"><h2 style="color: #e9d1fd">{{ t('viewDetail')}}</h2></router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  completo: Boolean
})
</script>
<style scoped>
.tecnosor-body {
  padding-top: px;
}
.tecnosor-body-completo {
  padding-top: 30px;
}

.tecnosor-price-completo {
  margin-bottom: 30px;
}

.tecnosor-body > p {
  color: #e9d1fd;
}

.tecnosor-body > h2 {
  color: #ffffff;
}
</style>
