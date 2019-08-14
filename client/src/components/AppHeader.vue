<template>
  <div class="container">
    <header>
      <i class="material-icons user-icon">account_circle</i>
      <div class="header-name">David Lasry</div>
    </header>
  </div>
</template>

<script>
import store from "../store";
import NoteItem from "./NoteItem.vue";

export default {
  components: {
    NoteItem
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  display: flex;
  align-items: center;
  height: 100px;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ebebeb;

  header {
    padding-left: 30px;
    width: 100%;
    color: #6e6e6e;
    display: flex;
    align-items: center;

    .user-icon {
      font-size: 35px;
      margin: 15px;
    }

    .header-name {
      font-size: 24px;
      font-weight: 900;
    }
  }
}
</style>