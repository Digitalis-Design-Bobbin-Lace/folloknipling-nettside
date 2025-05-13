import HomeView from '@/pages/HomeView/HomeView.vue'
import AboutView from '@/pages/AboutView/AboutView.vue'
import TestView from '@/pages/TestView/TestView.vue'
import InformationView from '@/pages/InformationView/InformationView.vue'
import CoursesView from '@/pages/CoursesView/CoursesView.vue'
import RegistrationView from '@/pages/CoursesView/RegistrationView.vue'
import TeachersView from '@/pages/CoursesView/TeachersView.vue'
import Course1A from '@/pages/CoursesView/Courses/Course1A.vue'
import Course1B from '@/pages/CoursesView/Courses/Course1B.vue'
import Course2A from '@/pages/CoursesView/Courses/Course2A.vue'
import Course2B from '@/pages/CoursesView/Courses/Course2B.vue'
import CourseBinche from '@/pages/CoursesView/Courses/CourseBinche.vue'

const routes = [
  { path: '/folloknipling-nettside/', component: HomeView },
  { path: '/folloknipling-nettside/home', redirect: '/folloknipling-nettside/' },
  { path: '/folloknipling-nettside/about', component: AboutView },
  { path: '/folloknipling-nettside/information', component: InformationView },
  { path: '/folloknipling-nettside/courses', component: CoursesView },
  { path: '/folloknipling-nettside/registration', component: RegistrationView },
  { path: '/folloknipling-nettside/teachers', component: TeachersView },
  { path: '/folloknipling-nettside/test', component: TestView },

  { path: '/folloknipling-nettside/course/Nybegynner 1A', component: Course1A },
  { path: '/folloknipling-nettside/course/Nybegynner 1B', component: Course1B },
  { path: '/folloknipling-nettside/course/Nybegynner 2A', component: Course2A },
  { path: '/folloknipling-nettside/course/Nybegynner 2B', component: Course2B },
  { path: '/folloknipling-nettside/course/Binche', component: CourseBinche },
]

export default routes
