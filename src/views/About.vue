<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Logo />
  </div>
</template>
<script>
import Logo from "../components/Logo.vue";

export default {
  name: "About",
  components: { Logo },
};
</script>
