<template>
  <div class="list-container">
    <note-item
      v-for="(note, index) in notes"
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
      filteredNotes: []
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
    notes() {
      return this.$store.getters.notes;
    }
  },
  created() {
    this.$store.dispatch("getNotes");
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

