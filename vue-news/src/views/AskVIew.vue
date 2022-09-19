<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchAskList()
      .then((res) => (this.users = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped></style>
