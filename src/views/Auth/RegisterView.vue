<template>
    <div class="container">
        <div class="columns">
            <div clas="column is-6 is-offset-3">
                <br />
                <!-- Formulario de registro -->
                <h3 class="title is-3">Crear una Cuenta</h3><hr>                 
                <form action="#" @submit.prevent="register">
                     <!-- Campo para el nombre -->
                    <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="tallerhyg" v-model="name">
                    </div>
                    </div>
                    <!-- Campo para el correo electrónico -->
                    <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="tallerhyg@gmail.com" v-model="email">
                    </div>
                    </div>
                    <!-- Campo para la contraseña -->
                    <div class="field">
                    <label class="label">Contraseña</label>
                    <div class="control">
                        <input class="input" type="password" v-model="password">
                    </div>
                    </div>
                    <!-- Botón de registro -->
                    <button type="submit" class="button is-primary">Registrarme</button>
                </form>
                 <!-- Mostrar mensajes de error -->
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
        // Método para registrar un nuevo usuario
        register(){
            if(this.name && this.email && this.password){
                this.error = null
                // Crear usuario con correo y contraseña utilizando Firebase Authentication
               createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then(user => {
                        // Limpiar campos después de un registro exitoso
                        this.name = ''
                        this.email = ''
                        this.password = ''
                        console.log(user)
                        this.$router.push({name : 'LoginView'})
                    }).catch(err => {
                        // Capturar y mostrar mensajes de error
                        this.error = err.message
                    })
            }
            else{
                 // Mostrar mensaje de error si no se proporcionan todos los campos
                this.error = 'Todos los campos son requeridos'
            }
        }
    },
}
</script>