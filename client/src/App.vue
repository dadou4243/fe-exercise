<template>
  <div id="app">
    <note-modal v-show="showModal" :noteData="selectedNoteData" @close="closeModal"></note-modal>
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
import { mapGetters } from "vuex";

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
    closeModal() {
      this.$store.dispatch("closeModal");
    }
  },
  computed: {
    ...mapGetters(["showModal", "notes", "selectedNoteData"])
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
