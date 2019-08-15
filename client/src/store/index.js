import Vue from 'vue';
import Vuex from 'vuex';
import NotesApi from '../services/api/Notes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    showModal: false,
    selectedNoteData: {}
  },
  mutations: {
    showModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      // mutate state
      state.showModal = false;
    },
    getNotes(state, payload) {
      state.notes = payload;
    },
    setSelectedNoteData(state, payload) {
      console.log('payload:', payload);
      state.selectedNoteData = payload;
    }
  },
  actions: {
    showModal({ commit }) {
      commit('showModal');
    },
    closeModal({ commit }) {
      commit('closeModal');
    },
    getNotes({ commit }) {
      NotesApi.getNotes().then(result => {
        commit('getNotes', result.data);
      });
    },
    getSelectedNoteData({ commit }, noteID) {
      console.log('noteID:', noteID);
      NotesApi.getNoteData(noteID).then(result => {
        console.log('result:', result);
        commit('setSelectedNoteData', result.data);
      });
    }
  },
  getters: {
    notes: state => {
      return state.notes;
    },
    showModal: state => {
      return state.showModal;
    },
    selectedNoteData: state => {
      return state.selectedNoteData;
    }
  }
});
