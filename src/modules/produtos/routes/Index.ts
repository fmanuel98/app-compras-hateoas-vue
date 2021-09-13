import { RouteRecordRaw } from "vue-router";
const Lista = () => import("@/modules/produtos/views/Lista.vue");
const ProductModule: Array<RouteRecordRaw> = [
  { path: "/lista", component: Lista },
];
export default ProductModule;
