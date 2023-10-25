<template>
    <div class="container">
        <div class="columns">
            <div clas="column is-6 is-offset-3">
                <br />
                <h3 class="title is-3">Crear una Cuenta</h3><hr>
                <form action="#" @submit.prevent="register">
                    <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g Alex Smith" v-model="name">
                    </div>
                    </div>

                    <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email">
                    </div>
                    </div>
                    <div class="field">
                    <label class="label">Contraseña</label>
                    <div class="control">
                        <input class="input" type="password" v-model="password">
                    </div>
                    </div>
                    <button type="submit" class="button is-primary">Registrarme</button>
                </form>
                <div class="notification is-danger" v-if="error">
                    {{ error }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { auth } from '../../firebase/init'
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default {
    data (){
        return {
            name: '',
            email: '',
            password: '',
            error: ''
        }
    },
    name: 'RegisterView',
    methods: {
        register(){
            if(this.name && this.email && this.password){
                this.error = null
               createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then(user => {
                        this.name = ''
                        this.email = ''
                        this.password = ''
                        console.log(user)
                    }).catch(err =>{
                        this.error = err.message
                    })
            }
            else{
                this.error = 'Todos los campos son requeridos'
            }
        }
    },
}
</script>