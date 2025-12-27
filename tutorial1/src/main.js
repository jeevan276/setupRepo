import { createApp } from "vue";
import App from "./App.vue";
import "./index.css"; // Your Tailwind v4 CSS file

// --- PrimeVue Imports ---
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura"; // This was missing!
import ToastService from "primevue/toastservice";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura, // Now Aura is defined
    options: {
      prefix: "p",
      darkModeSelector: ".my-app-dark",
      cssLayer: false, // Set to false if you want Tailwind to take precedence
    },
  },
});

app.use(ToastService); // Enable the $toast global property
app.mount("#app");
