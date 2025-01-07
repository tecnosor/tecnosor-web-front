import { createI18n } from 'vue-i18n'
import enUS from '../locales/en-US'
import esES from '../locales/es-ES'

function loadLocaleMessages() {
  const messages = {
      'en-US': enUS,
      'es-ES': esES
  }
  return messages
}


const i18n = createI18n({
  legacy: false,
  locale: navigator.language || 'en-US',
  fallbackLocale: navigator.language || 'en-US',
  messages: loadLocaleMessages()
})

export default i18n