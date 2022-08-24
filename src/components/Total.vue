<template>
  <div>
    <h1>Total de ventas</h1>
    <h2>Tus juegos comprados:</h2>
    <ul>
      <li v-for="(number, game) in totalGamesSold" :key="game"> 
        {{game}} - {{number}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
  computed: {
    ...mapGetters(["totalGamesSold"]),
    ...mapState ([])
  }
}
</script>

<style>
</style>