<template>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <h3 class="title is-3">
          H & G
        </h3>
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

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
                <a class="navbar-item">
                 Cerrar sesion
                </a>
                
              </div>
            </div>
          </template>
          <div class="buttons">
            <router-link class="button is-primary" to="/register">
              <strong>Registrarse</strong>
            </router-link> 
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