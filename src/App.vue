<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li><router-link :to="{name: 'inicio'}">Inicio</router-link></li>
      <li><router-link :to="{name: 'busqueda'}">Busqueda</router-link></li>
      <li><router-link :to="{name: 'ventas'}">Ventas</router-link></li>
      <li><router-link :to="{name: 'total'}">Total</router-link></li>
    </ul>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
li {
  display: inline-block;
  padding-left: 1em;
}
</style>
