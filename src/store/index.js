import { createStore } from 'vuex'
import products from './modules/products'
import channels from './modules/channels'

const store = createStore({
  modules: {
    products,
    channels
  }
})

export default store