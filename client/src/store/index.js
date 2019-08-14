import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {},
  actions: {},
  getters: {
    notes: state => {
      return state.notes;
    }
  }
});
