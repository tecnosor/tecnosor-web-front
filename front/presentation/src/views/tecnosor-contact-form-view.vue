<template>
    <div>
      <TecnosorHeader :minified="true" />
      <div class="container-view">
        <TecnosorContactForm />
      </div>
      <TecnosorFoother />
    </div>
  </template>
  
  <script setup lang="ts">
  import TecnosorHeader from '../components/tecnosor-header.vue';
  import TecnosorFoother from '../components/tecnosor-foother.vue';
  import TecnosorContactForm from '../components/tecnosor-contact-form.vue';
  </script>
  
  <style scoped>
  .container-view {
    padding: 50px;
  }
  </style>