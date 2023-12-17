import { db } from "@/firebase/config";
import { collection, onSnapshot, query } from "firebase/firestore";

const state = () => ( {
  channels: [],
})

const getters = {
  channels(state) {
    return state.channels
  }
}

const actions = {
  async getRealtimeChannels(context) {
    const q = query(
      collection(db, 'channels'),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));

      context.commit('setRealtimeChannels', documents)
    });

    console.log('unsubscribe', unsubscribe);

    return unsubscribe;
  },
}

const mutations = {
  setRealtimeChannels(state, payload) {
    state.channels = payload
  },
}

export default {
  namespaced: true, 
  state,
  getters,
  actions,
  mutations
}