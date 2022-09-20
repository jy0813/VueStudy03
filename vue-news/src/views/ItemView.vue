<template>
  <div>
    <section>
      <UserProfile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{
          fetchedItem.user
        }}</router-link>
        <template slot="time">{{ "Posted " + fetchedItem.time_ago }}</template>
      </UserProfile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "@/components/UserProfile.vue";
export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemName = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemName);
  },
  components: { UserProfile },
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
