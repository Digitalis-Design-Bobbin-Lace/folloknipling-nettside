import HomeView from '@/pages/HomeView/HomeView.vue'
import AboutView from '@/pages/AboutView/AboutView.vue'
import TestView from '@/pages/TestView/TestView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/home', redirect: '/' },
  { path: '/about', component: AboutView },
  { path: '/test', component: TestView },
]

export default routes
