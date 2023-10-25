import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from '../src/firebase/init'
let app = null

auth.onAuthStateChanged(() =>{
    if(!app){
        createApp(App).use(router).mount('#app') 
    }
})


