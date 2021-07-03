<template>
  <Navbar />
  <div id="layoutSidenav">
    <SideNav />
    <div id="layoutSidenav_content">
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import SideNav from "../components/SideNav.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "DashBoard",
  components: {
    Navbar,
    Footer,
    SideNav,
  },
};
</script>

<style></style>
