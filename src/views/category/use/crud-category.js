import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";
import { BASE_API_URL } from "../../../constants/index";

export function useAdd() {
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
}

export function useEdit() {
  const route = useRoute();
  const router = useRouter();
  const name = ref("");
  const id = ref(0);

  const getCategoryById = async (id) => {
    let url = `${BASE_API_URL}/api/category/${id}`;
    const { data } = await axios.get(url);

    name.value = data.name;
  };

  const onSubmitEdit = async () => {
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
  return { name, onSubmitEdit };
}

export function useIndex() {
  const categories = ref([]);
  const errorMessage = ref("");
  const loading = ref(false);
  const router = useRouter();
  const page = ref(1);
  const total = ref(10);

  const deleteCategory = async (id) => {
    const isConfirm = window.confirm("ลบหรือไม่");
    if (isConfirm === true) {
      await axios.delete(`${BASE_API_URL}/api/category/${id}`);
      router.go(0);
    }
  };

  const fetchData = async (page) => {
    try {
      loading.value = true;
      let url = `${BASE_API_URL}/api/category?page=${page}&page_size=24`;
      const { data } = await axios.get(url);
      categories.value = data.data;
      total.value = data.last_page;
      console.log(total.value);
    } catch (error) {
      console.log(error);
      loading.value = true;
      errorMessage.value = "เกิดข้อผิดพลาด";
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchData(page.value);
  });

  return {
    categories,
    errorMessage,
    loading,
    deleteCategory,
    page,
    total,
    fetchData,
  };
}
