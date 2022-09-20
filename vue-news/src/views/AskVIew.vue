<template>
  <div>
    <ListItem></ListItem>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p>
            <a :href="`/item/${item.id}`" class="news-title">{{
              item.title
            }}</a>
          </p>
          <small class="link-text"
            >{{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`">{{
              item.user
            }}</router-link></small
          >
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import ListItem from "@/components/ListItem.vue";
import bus from "../utils/bus.js";
export default {
  components: { ListItem },
  computed: {
    // ...mapGetters(["fetchedAsk"]),
  },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_ASK")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1500);
  },
};
</script>

<style scoped></style>
