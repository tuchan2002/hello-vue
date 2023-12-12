<template>
  <div v-if="product">
    <h1>Product Detail Page</h1>
    <h1>Name: {{ product.title }}</h1>
    <h3>Description: {{ product.body }}</h3>
  </div>
  <h1 v-else>Loading...</h1>
</template>

<script>
export default {
  data() {
    return {
      product: null
    }
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
      .then(res => res.json())
      .then(data => this.product = data)
  }
}
</script>
