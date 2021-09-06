import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Lista from '@/modules/produtos/routes/Index';

const routes: Array<RouteRecordRaw> = [
  ...Lista,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
