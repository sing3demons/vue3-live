<template>
  <div class="container-fluid px-4">
    <h1>เพิ่ม</h1>
    <div class="row">
      <form @submit.prevent="onSubmit">
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
          />

          <button type="submit" class="btn btn-primary">save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useAdd } from "./use/crud-category";
export default {
  name: "CategoryAdd",
  setup() {
    const { name, onSubmit } = useAdd();

    return { name, onSubmit };
  },
};
</script>

<style></style>
