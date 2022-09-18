import Vue from "vue";
import VueRouter from "vue-router";
import { NewsView } from "../views/NewsView.vue";
import { AskVuew } from "../views/AskView.vue";
import { JobsView } from "../views/JobsView.vue";
import { UserView } from "../views/UserView.vue";
import { ItemView } from "../views/ItemView.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskVuew,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/user",
      component: UserView,
    },
    {
      path: "/item",
      component: ItemView,
    },
  ],
});
