import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PerrosView from '../views/PerrosView.vue'
import GatosView from '../views/GatosView.vue'
import CasosView from '../views/CasosView.vue'
import NotFoundView from '../views/NotFoundView'
const routes = [
{
path: "/",
name: "LoginView",
component:LoginView
},
{
path: '/HomeView',
name: 'Home',
component: HomeView
},
{
path: '/PerrosView',
name: 'PerrosView',
component: PerrosView
},
{
path: '/GatosView',
name: 'GatosView',
component: GatosView
},
{
path: '/CasosView',
name: 'CasosView',
component: CasosView
},
{ 
path: '/:pathMatch(.*)*',
name: 'NotFoundView',
component: NotFoundView 
}
]
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router
