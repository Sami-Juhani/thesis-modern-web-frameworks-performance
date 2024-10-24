import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomeView from './views/HomeView.vue'
import PostListView from './views/PostListView.vue'
import PostView from './views/PostView.vue'
import UserListView from './views/UserListView.vue'
import UserView from './views/UserView.vue'

import './assets/main.css'

const routes = [
  { path: '/', component: HomeView },
  { path: '/posts', component: PostListView },
  { path: '/posts/:id', component: PostView },
  { path: '/users', component: UserListView },
  { path: '/users/:id', component: UserView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
