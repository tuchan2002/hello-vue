<template>
  <h1>Products Page</h1>
  <div v-if="products.length > 0">
    <div v-for="product in products" :key="product.id">
      <router-link :to="`/products/${product.id}`">{{ product.title }}</router-link>
    </div>
  </div>
  <h1 v-else>Loading...</h1>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.products = data)
  }
}
</script>
