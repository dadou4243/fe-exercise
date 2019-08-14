<template>
  <div class="container">
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
      <div class="filtered-notes" v-if="filteredNotes && modal" v-click-outside="modal = false">
        <ul>
          <li
            v-for="(filteredNote, index) in filteredNotes"
            :key="index"
            @click="setNote"
          >{{ filteredNote }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import { ClickOutside } from "../directives/ClickOutsideDirective";

export default {
  data: function() {
    return {
      note: "",
      notes: ["Ali", "Baba", "quarante", "voleurs"],
      filteredNotes: [],
      modal: false
    };
  },
  props: {},
  directives: {
    ClickOutside
  },
  methods: {
    filterNotes() {
      console.log("note:", this.note);
      if (this.note === "") {
        this.filteredNotes = [];
      } else {
        this.filteredNotes = this.notes.filter(note => {
          if (note === "") {
            return [];
          }
          return note.toLowerCase().startsWith(this.note.toLowerCase());
        });
      }
    },
    setNote() {
      console.log("set note", this.note);
      this.modal = false;
    }
  },
  events: {
    clickOutside() {
      console.log("click outside");
    }
  }
};
</script>


<style lang="scss" scoped>
.container {
  margin: 30px 0;
  .wrapper {
    position: relative;

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
      font-size: 13px;
      min-width: 150px;
      padding-left: 40px;
    }
  }
  .filtered-notes {
    ul {
      list-style: none;

      li {
        color: black;
        cursor: pointer;
      }
    }
  }
}
</style>


