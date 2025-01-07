<template>
  <div class="tecnosor-open-source">
    <div class="container tecnosor-body">
      <div class="columns">
        <div class="column col-12">
          <h2 class="feature-title">{{t("We love Open Source")}}</h2>
        </div>
        <div class="column col-10 centered col-sm-12">
          <img class="open-source-img" src="/assets/images/open-source.svg" alt="" />
          <h2 class="open-source-feature">
            {{t("We're making")}}
            <br />
            {{t("Open Source Software")}}
          </h2>
          <a href="https://github.com/tecnosor?tab=followers" class="btn btn-lg btn-open-source">Follow us on Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>


/* Open Source */

.tecnosor-open-source {
    padding: 4rem 0;
    text-align: center;
}

.open-source-feature {
    font-weight: 700;
    font-size: 3.5rem;
}

.tecnosor-open-source .btn-open-source {
    padding: .8rem 1.5rem;
    background: #fff;
    border-color: #ddd;
    color: #444;
    height: auto;
}


.tecnosor-footer {
    background: #0a007e;
    color: #fff;
    padding: 3rem 0;
}

.tecnosor-footer h4 {
    font-size: 1rem;
    color: #fff;
}

.tecnosor-footer .nav .nav-item a {
    padding: .3rem 0rem;
    color: #fff;
    opacity: 0.8;
    font-weight: 200;
}

</style>
