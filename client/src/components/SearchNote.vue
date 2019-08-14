<template>
  <div class="container">
    <input type="text" placeholder="Search..." />
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
  margin: 30px 0;
  input {
    background-color: #c1c1c1;
    border: none;
    border-radius: 13px;
    height: 20px;
    padding: 5px 10px;
    font-size: 13px;
    min-width: 150px;
  }
}
</style>


