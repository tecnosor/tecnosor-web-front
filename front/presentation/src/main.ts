import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App).use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')

/*const sitemap = () => {
    const routes = router
        .getRoutes()
        .map(r => r.path)
        .filter(r => !r.includes(':')) // removes routes with params
        .map(r => `<url><loc>https://www.tecnosor.es${r}</loc></url>`)
    console.log(`
        <?xml version='1.0' encoding='UTF-8'?>
        <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
            ${routes.join('\n')}
        </urlset>
    `)
}
*/
// TODO, PARA GENERAR EL MAPA DEL SITIO
// sitemap();