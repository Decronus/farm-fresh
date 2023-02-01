import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import myComponents from "./components/index";

const app = createApp(App);

myComponents.forEach((component) => {
    app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
