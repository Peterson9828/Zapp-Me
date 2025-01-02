import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
import { initialize } from './firebase'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const { firebaseApp } = initialize()
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth],
})
app.use(createPinia())
app.use(router)

app.mount('#app')
