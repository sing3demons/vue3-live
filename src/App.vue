<template>
  <router-view />
</template>


<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "App",
  setup: () => {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getProfile");
    });
  },
};
</script>