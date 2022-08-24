<template>
  <div>
    <h2>Total de unidades Disponibles: {{ totalStock }}</h2>
    <list :games="availableGames"></list>
    <h2>Busca tu Juego</h2>
    <input type="text" v-model="searchId"> 
    <ul>
      <li v-for="game in searchGamesById" :key="game.id">
        {{game.id}}  |  {{game.name}}  |  {{game.stock}}  |  {{game.price}} 
      </li>
    </ul>
  </div>
</template>

<script>
import List from "@/components/List"
import { mapGetters } from "vuex"
export default {
  data() {
    return {searchId: "",}
  },
  components: {List},
  computed: {
    ...mapGetters(["availableGames", "searchById", "totalStock"]),
    searchGamesById() {
      return this.searchById(this.searchId)
    }
  }
}
</script>

<style>
</style>