import { createI18n } from 'vue-i18n'
import enUS from '../locales/en-US'
import esES from '../locales/es-ES'

const userLocale = navigator.language || 'en-US';
const supportedLocales = ['en-US', 'es-ES'];

// Usar el idioma completo si está soportado, o reducirlo a 'en'/'es'
const locale = supportedLocales.includes(userLocale)
  ? userLocale
  : supportedLocales.find((lang) => lang.startsWith(userLocale.split('-')[0])) || 'en-US';

function loadLocaleMessages() {
  const messages = {
      'en-US': enUS,
      'es-ES': esES
  }
  return messages
}


const i18n = createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: locale || 'en-US',
  messages: loadLocaleMessages()
})

export default i18n