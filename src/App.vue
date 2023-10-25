<template>
  <div id="app">
    
    <NavigationBar/>
    <div class="nav">
    </div>
  </div>
  <router-view/>
</template>

<script>
import  NavigationBar from '@/components/layout/NavigationBar';
export default {
  components:{
    NavigationBar
  }
}
</script>
<style lang="scss">
  @import './scss/app.scss';
</style>