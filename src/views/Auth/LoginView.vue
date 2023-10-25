<template>
    <div class="container">
        <div class="columns">
            <div clas="column is-6 is-offset-3">
                <br />
                <h3 class="title is-3"> Iniciar Sesion</h3><hr>
                <form action="#" @submit.prevent="login">

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
                    <button type="submit" class="button is-primary">Iniciar Sesion</button>
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
import { signInWithEmailAndPassword } from 'firebase/auth';
export default {
    data (){
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    name: 'LoginView',
    methods: {
        login(){
            if(this.email && this.password){
                this.error = null
                signInWithEmailAndPassword(auth, this.email, this.password)
                    .then(user => {
                        console.log(user);
                        this.$router.push({name : 'DashBoardView'})
                    }).catch(err => {
                        console.log(err)
                        this.error = 'Credenciales Invalidas'
                    })
            }
            else{
                this.error = 'Todos los campos son requeridos'
            }
        }
    },
}
</script>