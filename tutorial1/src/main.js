import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import PrimeVue from "primevue/config";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".my-app-dark", // Optional: for dark mode toggle
    },
  },
});
app.mount("#app");
