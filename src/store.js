import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "32 Bits",
    subtitle: "Juegos de Pc y Consolas",
    games: [{id: "0001", name: "Sekiro", stock: 100, price: 30000, color: "red", outstanding: true}, 
    {id: "0002", name: "Fifa 21", stock: 100, price: 25000, color: "blue", outstanding: false},
    {id: "0003", name: "Gears of War 4", stock: 100, price: 15000, color: "green", outstanding: true},
    {id: "0004", name: "Mario Tennis Aces", stock: 100, price: 35000, color: "yellow", outstanding: false},
    {id: "0005", name: "Bloodborne", stock: 100, price: 10000, color: "blue", outstanding: false},
    {id: "0006", name: "Forza Horizon 4", stock: 100, price: 20000, color: "red", outstanding: true}],
    sales: [],
  },
  getters: {
    availableGames(state) {
      return  state.games.filter (game => game.stock > 0); 
    },
    searchById: (_state, getters) => (id) => {
      return getters.availableGames.filter (game => game.id == id)
    },
    totalStock (state) {
      return state.games.reduce((acc, game) => acc + game.stock, 0)
    },
    totalGamesSold(state) {
      let games = state.sales.map((game) => game.name)
      return games.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), 
      Object.create(null));
 }    
  },
  mutations: {
    ADD_SALES(state, product) {
      state.sales.push(product)
    },
    REMOVE_FROM_STOCK(state, game) {
      // eslint-disable-next-line no-console
      console.log(game)
      let prod = state.games.find(p => p.id == game.id)
     prod.stock -= 1;
    },
  },
  actions: {
    processSale({commit}, game) {
      setTimeout(() => {
        commit("REMOVE_FROM_STOCK", game)
        setTimeout(() => {
          commit ("ADD_SALES", game)
          alert ('Venta procesada');
        }, 2000) 
      }, 3000)
    },
  }
});


export default store;
