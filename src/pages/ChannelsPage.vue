<template>
  <div v-if="channels.length > 0" class="container">
    <div class="channel-list">
      <div v-for="channel in channels" :key="channel.id" @click="() => handleClickChannel(channel.id)" class="channel-item">
        <span>{{ channel.name }}</span>
      </div>
    </div>
    <div class="message-list">
      <div v-for="message in messages" :key="message.id" class="message">
        <img alt="" :src="message.user.photoURL"/>
        <div class="message-content">
          <span>{{ message.content }}</span>
          <img v-if="message.imageURL" alt="" :src="message.imageURL" class="message-image"/>
        </div>
      </div>
    </div>
  </div>
  <h1 v-else>Loading...</h1>
</template>

<script>
import { db } from '@/firebase/config';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

export default {
  data() {
    return {
      messages: [],
      snapshotListener: null,
    }
  },
  computed: {
    channels() {
      return this.$store.getters['channels/channels']
    },
    selectedChannel() {
      return this.$store.getters['channels/selectedChannel']
    }
  },
  watch: {
    selectedChannel: {
      handler(newSelectedChannel) {
        if (newSelectedChannel) {
          if (this.snapshotListener) {
            this.snapshotListener();
          }

          const selectedChannelId = newSelectedChannel.id;
          
          const q = query(
            collection(db, 'messages'),
            where('channelId', '==', selectedChannelId),
            orderBy('createdAt')
          );

          this.snapshotListener = onSnapshot(q, (snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id
            }));
            this.messages = documents
          });
        }
      },
      deep: true,
    },
  },
  methods: {
    handleClickChannel(channelId) {
      this.$store.dispatch("channels/selectChannel", { channelId });
    }
  },
  mounted() {
  }
}
</script>
<style scoped>
.container {
  display: flex;
  gap: 20px;
  padding: 0 20px;
}
.container > * {
  border: 1px solid #ccc;
  padding: 20px;
}
.channel-list {
  min-width: 300px;
}
.message-list {
  flex-grow: 1;
}
.message {
  display: flex;
  gap: 20px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  padding: 10px;
}
.message > img {
  width: 48px;
  height: 48px;
  border-radius: 100px;
}
.message .message-image {
  width: 96px;
  height: 96px;
}
.message-content {
  display: flex;
  flex-direction: column;
}
.channel-item {
  border: 1px solid #ccc;
  width: fit-content;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
