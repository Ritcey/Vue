import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import from the new file

createApp(App).use(router).mount('#app')


import AboutViewView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginPage from '@/views/LoginPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
const routes = [
  {
    path: '/',
    name: 'about',
    component: App
  },
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }
  }
]


export default router
