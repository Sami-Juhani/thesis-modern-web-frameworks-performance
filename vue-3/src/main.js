import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomeView from './views/HomeView.vue'

import './assets/main.css'

const routes = [{ path: '/', component: HomeView }]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).mount('#app')
