<template>
  <div v-if="product">
    <h1>Product Detail Page: {{ product.id }}</h1>
    <h1>Name: {{ product.title }}</h1>
    <h3>Description: {{ product.description }}</h3>
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
    product() {
      return this.$store.state.product
    }
  },
  created() {
    this.$store.dispatch("fetchProduct", {productId: this.$route.params.id});
  }
}
</script>
