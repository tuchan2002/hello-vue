<template>
  <h1>Products Page</h1>
  <div v-if="productsFiltered.length > 0">
    <div v-for="product in productsFiltered" :key="product.id">
      <router-link :to="`/products/${product.id}`">{{ product.title }}</router-link>
    </div>
  </div>
  <h1 v-else>Loading...</h1>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    productsFiltered() {
      return this.$store.getters.productsFiltered
    }
  },
  created() {
    this.$store.dispatch("fetchAllProducts");
  }
}
</script>
