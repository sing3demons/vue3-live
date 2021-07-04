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
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { BASE_API_URL } from "../../constants/index";
export default {
  name: "CategoryAdd",
  setup() {
    const name = ref("");
    const router = useRouter();

    const onSubmit = async () => {
      try {
        const { data } = await axios.post(`${BASE_API_URL}/api/category`, {
          name: name.value,
        });
        // alert(data.message);
        Swal.fire(data.message, "ผลการทำงาน", "success");
        router.replace("/category");
      } catch (error) {
        alert(error);
      }
    };

    return { name, onSubmit };
  },
};
</script>

<style></style>
