import axios from "axios";

// 1. HTTP Request & Response 와 관련된 기본 설정

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리

const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`);
};

const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`);
};

const fetchAskList = () => {
  return axios.get(`${config.baseUrl}ask/1.json`);
};

const fetchList = async (pageName) => {
  try {
    const res = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const fetchUserList = async (userName) => {
  try {
    const res = await axios.get(`${config.baseUrl}user/${userName}.json`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const fetchItemList = async (itemName) => {
  try {
    const res = await axios.get(`${config.baseUrl}item/${itemName}.json`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserList,
  fetchItemList,
  fetchList,
};
