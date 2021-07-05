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

    return { email, url, imgUrl, isShow, greet };
  },
};
</script>
