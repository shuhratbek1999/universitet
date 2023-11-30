import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Login from "./pages/Login/login.vue";
import Register from "./pages/register/Register.vue";
import Profil from "./pages/Profil/Profil.vue";
import Dashboards from "./pages/Dashboard/Dashboard.vue";
import ProfilEdit from "./pages/DashboardEdit/DashboardEdit.vue";
import Stipendiya from "./pages/Stipendiya/Stipendiya.vue";
import Hujjatlar from "./pages/Hujjatlar/Hujjatlar.vue";
import Home from "./pages/Home/Home.vue";
import Reyting from "./pages/Reyting/Reyting.vue";
import About from "./pages/About/About.vue";
import News from "./pages/news/news.vue";
import Elon from "./pages/Elon/Elon.vue";
import Userlar from "./pages/Userlar/Userlar.vue";
import StependiyaAriza from "./pages/StependiyaAriza/StependiyaAriza.vue";
import Academy from "./pages/Academy/Academy.vue";
import Fakultet from "./pages/Fakultet/Fakultet.vue";
import Tasdiqlangan from "./pages/Tasdiqlangan/Tasdiqlangan.vue";
import startUp from "./pages/startup/startup.vue";
import Yangiliklar from "./pages/Yangiliklar/Yangiliklar.vue";
// import statistika from "./pages/statistika/statistika.vue";
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    // {
    //   path: "/statistika",
    //   name: "Statistikaa",
    //   component: statistika,
    // },
    {
      path: "/yangiliklar",
      name: "Newss",
      component: News,
    },
    {
      path: "/fakultet",
      name: "Fakultetlar",
      component: Fakultet,
    },
    {
      path: "/coniform",
      name: "TasdiqlanganArizalar",
      component: Tasdiqlangan,
    },
    {
      path: "/elon",
      name: "Elonlar",
      component: Elon,
    },
    {
      path: "/scholarship",
      name: "StipendiyaAriza",
      component: StependiyaAriza,
    },
    {
      path: "/userlar",
      name: "Userlar",
      component: Userlar,
    },
    {
      path: "/academy",
      name: "Akademiyalar",
      component: Academy,
    },
    {
      path: "/home",
      name: "Homee",
      component: Home,
    },
    {
      path: "/startup",
      name: "StartUp",
      component: startUp
    },
    {
      path: "/news",
      name: "NewsYangi",
      component: Yangiliklar
    },
    {
      path: "/about",
      name: "AboutAcademy",
      component: About,
    },
    {
      path: "/reyting",
      name: "Reyting",
      component: Reyting,
    },
    {
      path: "/register",
      name: "Registratsiya",
      component: Register,
    },
    {
      path: "/profil",
      name: "Profil",
      component: Profil,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboards,
    },
    {
      path: "/admin",
      name: "DashboardAdmin",
      component: Dashboard,
    },
    {
      path: "/user/profil/edit",
      name: "ProfilEdit",
      component: ProfilEdit,
    },
    {
      path: "/user/scholarship",
      name: "Stipendiya",
      component: Stipendiya,
    },
    {
      path: "/user/document",
      name: "Hujjatlar",
      component: Hujjatlar,
    },
  ]
})

export default router
