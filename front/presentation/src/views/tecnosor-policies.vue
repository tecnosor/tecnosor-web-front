<template>
  <div>
    <TecnosorHeader :minified="true"/>
    <div class="techno-sor-policies">
    <h2>Legal Notices</h2>

    <section id="privacy" class="policy-section">
      <h3>Privacy Policy</h3>
      <p>
        We collect certain data from users visiting our website through Google Analytics. This data includes anonymous information such as IP addresses, browser types, referring pages, and the time spent on our site. The data collected is used to analyze website traffic and improve our services. We do not collect personal data that can directly identify an individual without consent. Users can choose to opt out of Google Analytics by using the Google Analytics Opt-out Browser Add-on.
      </p>
    </section>
    
    <section id="cookies" class="policy-section">
      <h3>Cookie Policy</h3>
      <p>
        Our website uses cookies to collect information via Google Analytics. These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. The cookies may include data such as your IP address, browser type, and other anonymous identifiers. This information helps us analyze and enhance your experience on our site. You have the option to accept or decline cookies upon your first visit, and you can manage your preferences through your browser settings.
      </p>
    </section>
    
    <section id="copyright" class="policy-section">
      <h3>Copyright Policy</h3>
      <p>
        All content on this website, including text, images, logos, and other materials, is protected by copyright and is the exclusive property of Tecnosor - Alfonso Soria. Unauthorized reproduction, distribution, or use of any content is prohibited without explicit permission from the copyright holder. Our public projects are subject to specific licenses, which are detailed in their respective repositories.
      </p>
    </section>
    
    <section id="legal-mentions" class="policy-section">
      <h3>Legal Mentions</h3>
      <p>
        This website is operated by Tecnosor (Alfonso Soria). All rights are reserved. Unauthorized use of the content on this site is prohibited and may result in legal action. For more information or legal inquiries, please contact us at soporte@tecnosor.es.
      </p>
    </section>
    </div>
    <TecnosorFoother/>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import TecnosorHeader from '../components/tecnosor-header.vue'
import TecnosorFoother from '../components/tecnosor-foother.vue'

const router = useRouter();

function goBack() {
  router.go(-1); // Navigate back to the previous page
}
</script>

<style scoped>
.techno-sor-policies {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  color: #333;
}

.techno-sor-policies h2 {
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
