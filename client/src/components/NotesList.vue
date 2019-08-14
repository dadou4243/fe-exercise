<template>
  <div class="list-container">
    <note-item v-for="(note, index) in notes" :key="index" :note="note"></note-item>
  </div>
</template>

<script>
import store from "../store";
import NoteItem from "./NoteItem.vue";
import axios from "axios";
import NotesApi from "../services/api/Notes";

export default {
  name: "notes-list",
  data() {
    return {
      notes: []
    };
  },
  components: {
    NoteItem
  },
  methods: {},
  computed: {
    doneTodosCount() {
      return this.$store.getters.notes;
    }
  },
  created() {
    NotesApi.getNotes().then(result => {
      console.log("notes:", result.data);
      this.notes = result.data;
    });
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

