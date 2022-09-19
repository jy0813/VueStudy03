<template>
  <div>
    <section>
      <div class="user-container">
        <div class="user">🙍‍♂️</div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">{{
            fetchedItem.user
          }}</router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemName = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemName);
  },
};
</script>

<style scoped>
section {
  padding: 2rem;
}

.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 1rem;
}

.time {
  font-size: 0.7rem;
}
</style>
