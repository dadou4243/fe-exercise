<template>
  <div class="note-container">
    <div class="author-info">
      <div class="note-author">
        <div class="label">Author name:</div>
        <div class="author-name">{{ note.author }}</div>
      </div>

      <div class="note-description">
        <div class="label">Description:</div>
        <div class="author-description">{{ note.body }}</div>
      </div>
    </div>

    <edit-note-button @getNoteData="getNoteData"></edit-note-button>
  </div>
</template>

<script>
import store from "../store";
import EditNoteButton from "./EditNoteButton.vue";

export default {
  components: {
    EditNoteButton
  },
  props: {
    // note item data
    note: Object
  },
  methods: {
    // On getNoteData event
    getNoteData() {
      // Emit getNoteData event to the parent component (NotesList)
      this.$emit("getNoteData", this.note.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.note-container {
  display: flex;
  width: 100%;
  min-height: 170px;
  background-color: #1bb38a;
  margin-bottom: 20px;
  border-radius: 12px;

  .author-info {
    padding: 20px 50px 20px 20px;
    color: #ffffff;
    flex: 1;

    .note-author,
    .note-description {
      display: flex;
    }

    .note-author {
      margin-bottom: 10px;
    }

    .label {
      font-size: 20px;
      font-weight: 700;
      min-width: 140px;
    }

    .author-name {
      font-size: 18px;
    }

    .author-description {
      font-size: 14px;
      top: 5px;
      position: relative;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>

