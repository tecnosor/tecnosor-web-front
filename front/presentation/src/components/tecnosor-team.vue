<template>
  <div id="team" class="tecnosor-team">
    <div class="container tecnosor-body">
      <div class="columns">
        <div class="column col-12">
          <h2 class="feature-title">El equipo</h2>
        </div>
        <div class="column col-12 col-sm-12">
          <a href="https://www.linkedin.com/in/alfonso-soria/?locale=es_ES"><img class="s-circle circle-full" src="@/assets/images/alfonso.jpeg" alt="" /></a>
          <a href="https://www.linkedin.com/in/alfonso-soria/?locale=es_ES"><span class="name">Alfonso Soria Muñoz</span></a>
          <span class="title">{ {{t("IT Solutions Architect")}} }</span>
          <span class="title titleend">{ {{t("Technical Leader")}} }</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.circle-full {
  border-radius: 100%;
  transition: transform 0.15s ease-in-out;
}
.circle-full:hover {
  transform: scale(1.1); /* Cambia el valor para ajustar el nivel de aumento */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); /* Añade sombra al ampliar */
}
@media (max-width: 600px){
  .tecnosor-team .titleend {
      font-size: .8rem;
      opacity: .5;
      padding-bottom: 2rem;
      display: block;
  }
  
  .tecnosor-team .title {
      font-size: .8rem;
      opacity: .5;
      padding-bottom: 0rem;
      display: block;
  }
}
</style>
