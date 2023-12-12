<template>
  <!-- Barra de navegación -->
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
       <!-- Enlace del logotipo -->
      <router-link class="navbar-item" to="/">
        <h3 class="title is-3">
          H & G
        </h3>
      </router-link>
      <!-- Botón del menú desplegable en versión móvil -->
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- Menú principal de navegación -->
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          
        </router-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <template>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                usuario
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  DashBoard
                </a>
                <!-- Enlace para cerrar sesión -->
                <a class="navbar-item">
                 Cerrar sesion
                </a>
                
              </div>
            </div>
          </template>
          <div class="buttons">
            <!-- Enlace para registrarse -->
            <router-link class="button is-primary" to="/register">
              <strong>Registrarse</strong>
            </router-link> 
             <!-- Enlace para iniciar sesión -->
            <router-link class="button is-light" to="/login">
              Inicio Sesión
            </router-link >
          </div>
        </div>
      </div>
  </nav>
</template>
<script>
export default {
    
}
</script>