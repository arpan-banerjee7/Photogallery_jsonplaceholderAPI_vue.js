import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import { routes } from "./routes";
import App from "./App.vue";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

//configuring the root url required for evrery other request in the application
Vue.http.options.root = "http://jsonplaceholder.typicode.com/";
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
