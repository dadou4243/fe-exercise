<template>
  <div class="container">
    <div class="overlay" @click="modal = false" v-if="modal"></div>
    <div class="wrapper">
      <i class="material-icons search-icon">search</i>
      <input
        type="text"
        autocomplete="off"
        @input="filterNotes"
        @focus="modal = true"
        v-model="note"
        placeholder="Search..."
      />
      <div class="filtered-notes" v-if="filteredNotes && modal">
        <ul>
          <li
            v-for="(filteredNote, index) in filteredNotes"
            :key="index"
            @click="setNote(filteredNote)"
          >{{ filteredNote }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data: function() {
    return {
      note: "",
      notes: ["Ali", "Aladin", "Alain", "Baba", "quarante", "voleurs"],
      filteredNotes: [],
      modal: false
    };
  },
  methods: {
    filterNotes() {
      this.filteredNotes = this.notes.filter(note => {
        return note.toLowerCase().startsWith(this.note.toLowerCase());
      });
    },
    setNote(note) {
      this.modal = false;
      this.note = note;
      this.filterNotes();
    }
  },
  created() {
    this.filteredNotes = this.notes;
  }
};
</script>


<style lang="scss" scoped>
.container {
  margin: 30px 0;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }

  .wrapper {
    position: relative;
    z-index: 10;
    width: 200px;

    .search-icon {
      position: absolute;
      top: 3px;
      left: 8px;
      color: #ffffff;
    }

    input {
      background-color: #c1c1c1;
      color: #ffffff;
      border: none;
      border-radius: 13px;
      height: 20px;
      padding: 5px 10px;
      font-size: 14px;
      min-width: 150px;
      padding-left: 40px;
    }
  }
  .filtered-notes {
    width: 220px;
    position: absolute;
    border-radius: 4px;
    background-color: #ffffff;
    margin-top: 3px;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);

    ul {
      list-style: none;

      li {
        color: #585858;
        cursor: pointer;
        padding: 5px 10px;
        height: 25px;
        border-bottom: 1px solid #e2e2e2;
        font-size: 14px;

        &:hover {
          background-color: #27efb9;
        }
      }
    }
  }
}
</style>


