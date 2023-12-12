import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      product: null,
      products: []
    }
  },
  getters: {
    productsFiltered(state) {
      return state.products.filter(product => product.price > 100)
    }
  },
  actions: {
    async fetchAllProducts(context) {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json();

      context.commit('setAllProducts', data)
    },
    async fetchProduct(context, { productId }) {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const data = await res.json();

      context.commit('setProduct', data)
    }
  },
  mutations: {
    setAllProducts(state, payload) {
      state.products = payload
    },
    setProduct(state, payload) {
      state.product = payload
    }
  }
})

export default store