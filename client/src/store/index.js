import Vue from 'vue';
import Vuex from 'vuex';
import NotesApi from '../services/api/Notes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    showModal: false,
    selectedNoteData: {},
    filteredNotes: []
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
    },
    setFilteredNotes(state, payload) {
      state.filteredNotes = payload;
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
    setFilteredNotes({ commit, state }, author) {
      const filteredNotes = state.notes.filter(note => {
        return note.author === author;
      });
      commit('setFilteredNotes', filteredNotes);
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
    },
    filteredNotes: state => {
      return state.filteredNotes;
    },
    authors: state => {
      return state.notes.map(note => {
        return note.author;
      });
    }
  }
});
