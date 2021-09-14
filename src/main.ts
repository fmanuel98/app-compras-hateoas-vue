import { createApp } from "vue";
import PrimeVue from "primevue/config";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import store from "./store";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(PrimeVue);
app.component("InputText", InputText);
app.component("Button", Button);
app.use(store);
app.use(router);
app.mount("#app");
