import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductModule from "@/modules/produtos/routes/Index";

const routes: Array<RouteRecordRaw> = [...ProductModule];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
