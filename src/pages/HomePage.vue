<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    this.products = this.$store.state.products
  }
}
</script>
