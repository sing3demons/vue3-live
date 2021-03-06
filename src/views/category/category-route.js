import { h, resolveComponent } from "vue";
import CategoryIndex from "./CategoryIndex.vue";
import CategoryAdd from "./CategoryAdd.vue";
import CategoryEdit from "./CategoryEdit.vue";

const categoryRoutes = [
  {
    path: "category",
    name: "category",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      { path: "", name: "CategoryIndex", component: CategoryIndex },
      { path: "add", name: "CategoryAdd", component: CategoryAdd },
      { path: "edit/:id", name: "CategoryEdit", component: CategoryEdit },
    ],
  },
];

export default categoryRoutes;
