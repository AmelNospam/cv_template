import { createApp } from "vue";
import App from "./App.vue";
// import Router from "vue-router";
import store from "./store";
import "./theme.css";
import "./plugins/axios";

// const router = new Router({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: "/",
//       name: "root",
//       component: App,
//     },
//   ],
// });

const app = createApp(App);
// app.use(router);
app.use(store);
app.mount("#app");
