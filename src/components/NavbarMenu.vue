<template>
  <nav v-if="products.length > 0" class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products ({{ products.length }})</router-link>
    <router-link to="/channels">Channels ({{ channels.length }})</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <h1 v-else>Loading Navbar...</h1>
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
    },
    channels() {
      return this.$store.getters['channels/channels']
    }
  },
  created() {
    this.$store.dispatch("products/fetchAllProducts");
  },
  async mounted() {
    const unsubscribePromise = this.$store.dispatch("channels/getRealtimeChannels");
    this.unsubscribe = await unsubscribePromise;
  },
  beforeUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
</script>
<style scoped>
.navbar {
  display: flex;
  gap: 25px;
  padding: 10px;
  background-color: burlywood;
  margin-bottom: 30px;
}

.navbar > * {
  border: 2px solid salmon;
  padding: 10px;
  background-color: black;
  text-decoration: none;
  color: white
}
</style>