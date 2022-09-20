import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserList,
  fetchItemList,
  fetchList,
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then((res) => {
        context.commit("SET_NEWS", res.data);
        return res;
      })
      .catch((err) => console.log(err));
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then(({ data }) => commit("SET_ASK", data))
      .catch((err) => console.log(err));
  },
  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then(({ data }) => commit("SET_JOBS", data))
      .catch((err) => console.log(err));
  },
  FETCH_USER({ commit }, name) {
    return fetchUserList(name)
      .then(({ data }) => commit("SET_USER", data))
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, item) {
    return fetchItemList(item)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((err) => console.log(err));
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then((res) => {
        console.log(4);
        commit("SET_LIST", res.data);
        return res;
      })
      .catch((err) => console.log(err));
  },
};
