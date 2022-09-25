<template>
  <div>
    <FetchData url="https://jsonplaceholder.typicode.com/users/1">
      <div slot-scope="{ response, loading }">
        <div v-if="!loading">
          {{ response }}
        </div>
        <div v-if="loading">Loading...</div>
      </div>
    </FetchData>
  </div>
</template>

<script>
import FetchData from "@/components/FetchData.vue";
export default {
  components: { FetchData },
};
</script>

<style scoped></style>
