import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserList,
} from "../api/index.js";

export default {
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
  FETCH_USER({ commit }, name) {
    fetchUserList(name)
      .then(({ data }) => commit("SET_USER", data))
      .catch((err) => console.log(err));
  },
};
