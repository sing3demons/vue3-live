<template>
  <div class="about px-3">
    <h1 class="d-flex justify-content-center">This is an about page</h1>
    <p>{{ email }}</p>
    <a :href="url">Google</a>
    <br />
    <img :src="imgUrl.url" :alt="imgUrl.atl" v-if="isShow" />
    <br />
    <button class="btn-btn-info" @click="greet">Click Me!</button>
  </div>

  <div class="mt-5">
    <div class="row px-5">
      <form @submit.prevent="onSubmit()" enctype="multipart/form=data">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >upload file</label
          >
          <input
            type="file"
            class="form-control mb-4"
            name="picture"
            ref="file"
          />

          <button type="submit" class="btn btn-primary">save</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, onUpdated, onUnmounted } from "vue";

export default {
  name: "About",
  components: {},
  setup() {
    const email = ref("sing@dev.com");
    const url = ref("https://google.com");
    const imgUrl = reactive({
      url: "https://v3.vuejs.org/logo.png",
      atl: "image",
    });
    const isShow = ref(false);
    const file = ref(null);

    const onSubmit = () => {
      const fileUpload = file.value.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(fileUpload);
      reader.onload = (e) => {
        const base64Image = e.target.result;
        console.log(base64Image);
        //ให้ส่ง base64Image ไปอัปโหลดที่ server โดยใช้ axios
      };
    };

    onMounted(() => {
      console.log("mounted!");
    });
    onUpdated(() => {
      console.log("updated!");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });

    const greet = () => {
      isShow.value = !isShow.value;
    };

    return { email, url, imgUrl, isShow, greet, onSubmit, file };
  },
};
</script>
