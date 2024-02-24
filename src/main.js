import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from '../src/firebase/init'
//import store from '../src/store';



let app = null

auth.onAuthStateChanged(() =>{
    if(!app){
       // createApp(App).use(router).use(store).mount('#app') 
       createApp(App).use(router).mount('#app') 
        
    }
})


