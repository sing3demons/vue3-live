<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 pt-8">
        <vue-confirm-dialog></vue-confirm-dialog>
        <h1 class="text-center">ประเภทสินค้า</h1>

        <router-link to="/category/add" class="btn btn-primary mx-3"
          >เพิ่มข้อมูล</router-link
        >

        <div class="d-flex justify-content-center">
          <div v-if="loading" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <table class="table" v-if="categories.length > 0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">เครื่องมือ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{ id, name } in categories" :key="id">
              <th scope="row">{{ id }}</th>
              <td>{{ name }}</td>
              <td>
                <router-link
                  :to="{ name: 'CategoryEdit', params: { id } }"
                  class="btn btn-primary"
                  >Edit</router-link
                >
                |
                <router-link
                  to="/category"
                  @click="deleteCategory(id)"
                  class="btn btn-danger"
                  >Delete</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div v-if="categories.length > 0">
        <v-pagination
          v-model="page"
          :pages="total"
          :range-size="1"
          active-color="#DCEDFF"
          @update:modelValue="fetchData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import { useIndex } from "./use/crud-category";

export default {
  name: "CategoryIndex",
  components: {
    VPagination,
  },
  setup() {
    const {
      categories,
      errorMessage,
      loading,
      deleteCategory,
      page,
      total,
      fetchData,
    } = useIndex();

    return {
      categories,
      errorMessage,
      loading,
      page,
      total,
      deleteCategory,
      fetchData,
    };
  },
};
</script>

<style></style>
