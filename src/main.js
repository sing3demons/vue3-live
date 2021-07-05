import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//admin template
import "startbootstrap-sb-admin/dist/css/styles.css"; //มีbootstrap 5 ในตัว
import "startbootstrap-sb-admin/dist/js/scripts";

import "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

createApp(App).use(store).use(router).mount("#app");
