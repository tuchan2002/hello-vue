<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/products">Products ({{ products.length }})</router-link>
  </nav>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/products']
    }
  },
  created() {
    this.$store.dispatch("products/fetchAllProducts");
  }
}
</script>
<style scoped>
.navbar {
  display: flex;
  gap: 25px;
}
</style>