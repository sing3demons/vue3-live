<template>
  <div class="container-fluid px-4">
    <h1>แก้ไข</h1>
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
            :ref="name.value"
          />

          <button type="submit" class="btn btn-primary">save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "../../constants/index";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import Swal from "sweetalert2";
export default {
  name: "CategoryEdit",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const name = ref("");
    const id = ref(0);

    const getCategoryById = async (id) => {
      let url = `${BASE_API_URL}/api/category/${id}`;
      const { data } = await axios.get(url);

      name.value = data.name;
    };

    const onSubmit = async () => {
      try {
        const { data } = await axios.put(`${BASE_API_URL}/api/category`, {
          id: id.value,
          name: name.value,
        });
        alert(data.message);
        Swal.fire(data.message, "ผลการทำงาน", "success");
        router.replace("/category");
      } catch (error) {
        alert(error);
      }
    };

    onMounted(() => {
      id.value = route.params.id;
      getCategoryById(id.value);
    });

    return { name, onSubmit };
  },
};
</script>

<style></style>
