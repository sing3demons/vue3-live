<template>
  <div class="container-fluid px-4">
    <h1>แก้ไข</h1>
    <div class="row">
      <form @submit.prevent="onSubmitEdit">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >ชื่อประเภทสินค้า</label
          >
          <input
            type="text"
            class="form-control mb-4"
            id="name"
            placeholder="name"
            v-model="name"
            :ref="name.value"
          />

          <button type="submit" class="btn btn-primary">save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useEdit } from "./use/crud-category";
export default {
  name: "CategoryEdit",
  setup() {
    const { name, onSubmitEdit } = useEdit();

    return { name, onSubmitEdit };
  },
};
</script>

<style></style>
