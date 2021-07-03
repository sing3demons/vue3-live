<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 px-1">
        <h1>สินค้า</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">detail</th>
              <th scope="col">picture</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{ id, title, detail, picture } in products" :key="id">
              <th scope="row">{{ id }}</th>
              <td>{{ title }}</td>
              <td>{{ detail }}</td>
              <td><img :src="picture" :alt="title" width="80" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "Product",
  setup() {
    const products = ref([]);

    const fetchData = async () => {
      let url = "https://api.codingthailand.com/api/course";
      const { data } = await axios.get(url);

      products.value = data.data;
    };

    onMounted(() => {
      fetchData();
    });

    return { products };
  },
};
</script>

<style></style>
