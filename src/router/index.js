import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView  from '../views/Auth/LoginView.vue'
import RegisterView  from '../views/Auth/RegisterView.vue'
import DashBoardView  from '../views/DashboardView.vue'
import { auth } from '../firebase/init'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, 
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  }, 
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/dashboard',
    name: 'DashBoardView',
    component: DashBoardView,
    meta:{
      requiredAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from ,next) =>{
  if(to.matched.some(ruta => ruta.meta.requiredAuth))
  {
      console.log(from);
      const user = auth.currentUser;
      if(user){
        next();
      }
      else{
        next({
          name: 'LoginView'
        })
      }
  }
  else{
    next();
  }
})

export default router
