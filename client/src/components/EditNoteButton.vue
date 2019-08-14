<template>
  <div class="container">
    <i class="material-icons edit-button">edit</i>
  </div>
</template>

<script>
import store from "../store";

export default {
  props: {},
  methods: {}
};
</script>


<style lang="scss" scoped>
.container {
  width: 110px;
  background-color: #4fb7ad;
  border-radius: 0 12px 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    background-color: #7fcfc7;
    transition: all 0.1s linear;
  }

  .edit-button {
    font-size: 40px;
  }
}
</style>


