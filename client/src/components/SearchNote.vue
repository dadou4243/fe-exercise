<template>
  <div class="container">
    <div class="overlay" @click="modal = false" v-if="modal"></div>

    <div class="wrapper">
      <i class="material-icons search-icon">search</i>

      <input
        type="text"
        autocomplete="off"
        @input="filterAuthors"
        @focus="modal = true"
        v-model="author"
        placeholder="Search..."
      />

      <div class="filtered-notes" v-if="filteredAuthors && modal">
        <ul>
          <li
            v-for="(author, index) in filteredAuthors"
            :key="index"
            @click="setNote(author)"
          >{{ author }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // value of the search text input
      author: "",
      // list of autocomplete suggestions
      filteredAuthors: [],
      // show/hide autocomplete modal
      modal: false
    };
  },
  methods: {
    // filter the autocomplete suggestions based on the value of the input
    filterAuthors() {
      if (this.author === "") {
        this.filteredAuthors = [];
      } else {
        this.filteredAuthors = this.authors.filter(author => {
          return author.toLowerCase().startsWith(this.author.toLowerCase());
        });
      }
      this.$store.dispatch("setFilteredNotes", this.author);
    },
    // when autocomplete item is clicked
    setNote(author) {
      this.modal = false;
      this.author = author;
    }
  },
  computed: {
    // get the list of authors from the store
    authors() {
      return this.$store.getters.authors;
    }
  },
  created() {
    // initialize the autocomplete suggestions list
    this.filteredNotes = this.authors;
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
    width: 200px;
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


