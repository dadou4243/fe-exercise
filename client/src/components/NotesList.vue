<template>
  <div class="list-container">
    <note-item
      v-for="(note, index) in filteredNotes"
      :key="index"
      :note="note"
      @getNoteData="getNoteData($event)"
    ></note-item>
  </div>
</template>

<script>
import NoteItem from "./NoteItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "notes-list",
  data() {
    return {
      test: []
    };
  },
  components: {
    NoteItem
  },
  methods: {
    getNoteData(noteID) {
      this.$store.dispatch("getSelectedNoteData", noteID);
    }
  },
  computed: {
    filteredNotes() {
      return this.$store.getters.filteredNotes;
    }
  }
};
</script>

<style lang="scss" scope>
.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>

