import { getAllProducts, getProductById } from "@/api"

const state = () => ( {
  product: null,
  products: []
})

const getters = {
  productsFiltered(state) {
    return state.products.filter(product => product.price > 100)
  },
  product(state) {
    return state.product
  },
  products(state) {
    return state.products
  }
}

const actions = {
  async fetchAllProducts(context) {
    const data = await getAllProducts()

    context.commit('setAllProducts', data)
  },

  async fetchProduct(context, { productId }) {
    const data = await getProductById(productId)

    context.commit('setProduct', data)
  }
}

const mutations = {
  setAllProducts(state, payload) {
    state.products = payload
  },
  setProduct(state, payload) {
    state.product = payload
  }
}

export default {
  namespaced: true, 
  state,
  getters,
  actions,
  mutations
}