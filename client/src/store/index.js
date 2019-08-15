import Vue from 'vue';
import Vuex from 'vuex';
import NotesApi from '../services/api/Notes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    showModal: false
  },
  mutations: {
    showModal(state) {
      // mutate state
      state.showModal = true;
    },
    getNotes(state, payload) {
      state.notes = payload;
    }
  },
  actions: {
    showModal({ commit }) {
      commit('showModal');
    },
    getNotes({ commit }) {
      NotesApi.getNotes().then(result => {
        commit('getNotes', result.data);
      });
    }
  },
  getters: {
    notes: state => {
      return state.notes;
    },
    showModal: state => {
      return state.showModal;
    }
  }
});
