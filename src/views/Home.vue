<template>
  <div class="home">
    <h1 class="text-primary">Hello</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Logo />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Logo from "../components/Logo.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Logo,
  },
};
</script>
