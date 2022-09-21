<template>
  <div>
    <div>
      <button @click="loginUser">login</button>
      <h1>List</h1>
      <div>
        <ul>
          <li v-for="item in items" :key="item.id">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div>
      <button @click="loginUser1">login</button>
      <h1>List</h1>
      <div>
        <ul>
          <li v-for="item in items" :key="item.id">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { handleException } from "../utils/handler";
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    loginUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => {
          if (res.data.id === 1) {
            console.log("사용자가 인증되었습니다.");
            axios
              .get("https://jsonplaceholder.typicode.com/todos")
              .then((res) => {
                this.items = res.data;
              })
              .catch();
          }
        })
        .catch((error) => console.log(error));
    },
    async loginUser1() {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (response.data.id === 1) {
          console.log("사용자가 인증되었습니다.");
          let list = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
          );
          this.items = list.data;
        }
      } catch (error) {
        handleException(error);
        console.log(error);
      }
    },
  },
};
</script>
