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
  async FETCH_USER({ commit }, name) {
    const res = await fetchUserList(name);
    commit("SET_USER", res.data);
    return res;
  },
  async FETCH_ITEM({ commit }, item) {
    const res = await fetchItemList(item);
    commit("SET_ITEM", res.data);
    return res;
  },
  async FETCH_LIST({ commit }, pageName) {
    const res = await fetchList(pageName);
    commit("SET_LIST", res.data);
    return res;
  },
};
