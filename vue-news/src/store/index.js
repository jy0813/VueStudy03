import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index.js";
Vue.use(Vuex);

//상태관리 도구
export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((res) => context.commit("SET_NEWS", res.data))
        .catch((err) => console.log(err));
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => commit("SET_ASK", data))
        .catch((err) => console.log(err));
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => commit("SET_JOBS", data))
        .catch((err) => console.log(err));
    },
  },
});
