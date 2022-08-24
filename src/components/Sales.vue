<template>
  <div>
    <h3>
      <p>Total de stock disponible: {{ totalStock }}</p>
      <p>Total de juegos: {{ availableGames.length}}</p>
    </h3>
      <list :hasButton="true" :games="availableGames" @sell-product="processSale"></list>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import List from "@/components/List"
export default {
    components: {List},
    computed: {
        ...mapGetters(["totalStock", "availableGames"]),
    },
    methods: {
      ...mapActions(["processSale"]),
      saleProduct(game) {
        this.processSale(game);
      },
    },
}
</script>

<style>
</style>