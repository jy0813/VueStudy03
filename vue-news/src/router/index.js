import Vue from "vue";
import VueRouter from "vue-router";
import { NewsView } from "../views/NewsView.vue";
import { AskVuew } from "../views/AskVuew.vue";
import { JobsView } from "../views/JobsView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/news", //url 주소
      component: NewsView, //url에 해당하는 컴포넌트
    },
    {
      path: "/ask", //url 주소
      component: AskVuew, //url에 해당하는 컴포넌트
    },
    {
      path: "/jobs", //url 주소
      component: JobsView, //url에 해당하는 컴포넌트
    },
  ],
});