<template>
  <div v-if="channels.length > 0">
    <div v-for="channel in channels" :key="channel.id">
      <h3>{{ channel.name }}</h3>
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
    channels() {
      return this.$store.getters['channels/channels']
    }
  },
}
</script>
