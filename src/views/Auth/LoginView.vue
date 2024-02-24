<template>
    <div class="container">
        <!-- Filas y columnas para el diseño -->
        <div class="columns">
            <div clas="column is-6 is-offset-3">
                <br />
                <!-- Título de la página de inicio de sesión -->
                <h3 class="title is-3"> Iniciar Sesion</h3><hr>
                <form action="#" @submit.prevent="login">
                    <!-- Campo para ingresar el correo electrónico -->
                    <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="tallerhyg.com" v-model="email">
                    </div>
                    </div>
                    <!-- Campo para ingresar la contraseña -->
                    <div class="field">
                    <label class="label">Contraseña</label>
                    <div class="control">
                        <input class="input" type="password" v-model="password">
                    </div>
                    </div>
                    <!-- Botón para enviar el formulario de inicio de sesión -->
                    <button type="submit" class="button is-primary">Iniciar Sesion</button>
                </form>
                 <!-- Notificación de error en caso de credenciales inválidas -->
                <div class="notification is-danger" v-if="error">
                    {{ error }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// Importar dependencias necesarias
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
                // Iniciar sesión con el correo y la contraseña proporcionados
                signInWithEmailAndPassword(auth, this.email, this.password)
                    .then(user => {
                        console.log(user);
                        //this.$store.commit('login');
                        this.$router.push({name : 'DashBoardView'})
                    }).catch(err => {
                        // Mostrar mensaje de error
                        console.log(err)
                        this.error = 'Credenciales Invalidas'
                    })
            }
            else{
                  // Mostrar mensaje de error si no se proporcionan todos los campos requeridos
                this.error = 'Todos los campos son requeridos'
            }
        }
    },
}
</script>