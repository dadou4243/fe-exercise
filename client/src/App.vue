<template>
  <div id="app">
    <note-modal v-show="isModalVisible" @close="closeModal"></note-modal>
    <button type="button" class="btn" @click="showModal">Open Modal!</button>
    <app-header></app-header>
    <div class="content">
      <search-note></search-note>
      <notes-list></notes-list>
    </div>
  </div>
</template>

<script>
import NotesList from "./components/NotesList.vue";
import AppHeader from "./components/AppHeader.vue";
import SearchNote from "./components/SearchNote.vue";
import NoteModal from "./components/NoteModal.vue";

export default {
  name: "app",
  components: {
    NotesList,
    AppHeader,
    SearchNote,
    NoteModal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  padding-top: 100px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .content {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    margin: 0 auto;
    padding: 0 3% 20px 3%;
  }
}
</style>
