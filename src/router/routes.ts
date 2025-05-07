import HomeView from '@/pages/HomeView/HomeView.vue'
import AboutView from '@/pages/AboutView/AboutView.vue'
import TestView from '@/pages/TestView/TestView.vue'

const routes = [
  { path: '/folloknipling-nettside/', component: HomeView },
  { path: '/folloknipling-nettside/home', redirect: '/folloknipling-nettside/' },
  { path: '/folloknipling-nettside/about', component: AboutView },
  { path: '/folloknipling-nettside/test', component: TestView },
]

export default routes
