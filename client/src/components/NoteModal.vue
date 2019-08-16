<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" v-show="data">
        <header class="modal-header">
          <div class="title">Edit note</div>

          <button type="button" class="btn-close" @click="close">x</button>
        </header>

        <section class="modal-body">
          <form class="edit-form">
            <div class="form-field">
              <label for="author">Author name</label>

              <input type="text" name="author" id="author" v-model="data.author" disabled />
            </div>

            <div class="form-field">
              <label for="description">Description</label>

              <textarea name="description" id="description" v-model="data.body"></textarea>
            </div>
          </form>
        </section>

        <footer class="modal-footer">
          <div class="updated-date">Last updated {{ formattedUpdateDate }}</div>
          <div class="buttons">
            <button type="button" class="btn-grey" @click="close">Cancel</button>

            <button type="button" class="btn-primary" @click="save">Save</button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import moment from "moment";

export default {
  name: "modal",
  props: {
    data: Object
  },
  methods: {
    close() {
      this.$emit("close", this.data);
      this.initialData = {};
    },
    save() {
      this.$emit("save", this.data);
      this.$emit("close", this.data);
    }
  },
  computed: {
    formattedUpdateDate() {
      return moment(this.data.updatedAt).fromNow();
    }
  }
};
</script>


<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 45vw;
  max-width: 450px;
  border-radius: 7px;
  width: 55vw;
  max-width: 500px;
}

.modal-header,
.modal-footer {
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #1bb38a;
  font-weight: 700;
  font-size: 22px;
  padding: 12px 15px 6px 30px;
  justify-content: space-between;

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
    color: #1bb38a;
    background: transparent;
  }
}

.modal-body {
  position: relative;
  padding: 20px 30px;

  .edit-form {
    .form-field {
      label {
        display: block;
        font-size: 13px;
        font-weight: 700;
        margin-bottom: 3px;
      }

      input,
      textarea {
        border: 1px solid gainsboro;
        border-radius: 4px;
        font-size: 14px;
      }

      input {
        padding: 5px 7px;
        margin-bottom: 15px;
        max-width: 90%;
        width: 200px;
      }

      input:disabled {
        color: #9a9a9a;
      }

      textarea {
        width: 85%;
        height: 80px;
        padding: 8px 13px;
        line-height: 1.3rem;
        resize: none;
      }
    }
  }
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: space-between;
  align-items: baseline;
  padding: 15px 20px;

  .updated-date {
    color: #696969;
    font-size: 12px;
  }

  button {
    border-radius: 4px;
    padding: 10px 20px;
    min-width: 70px;
    margin: 0 5px;
    border: none;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }

  .btn-primary {
    color: white;
    background-color: #1bb38a;
  }

  .btn-grey {
    background-color: #f5f5f5;
  }
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>