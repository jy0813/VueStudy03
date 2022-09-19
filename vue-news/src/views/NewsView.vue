<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p>
            <a :href="item.url" class="news-title">{{ item.title }}</a>
          </p>
          <small class="link-text"
            >{{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`">{{
              item.user
            }}</router-link></small
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}

.news-list .news-title {
  margin: 0;
}

.news-list .link-text {
  color: #828282;
}
</style>
