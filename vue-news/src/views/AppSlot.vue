<template>
  <div>
    <ul>
      <AppSlotItem>아이템 1</AppSlotItem>
      <AppSlotItem>아이템 2 <button>click me</button></AppSlotItem>
      <AppSlotItem
        ><div>아이템 3</div>
        <img
          src="../assets/logo.png"
          alt="로고"
          style="width: 50px; height: 50px"
      /></AppSlotItem>
      <AppSlotItem style="color: blue">아이템4</AppSlotItem>
    </ul>
  </div>
</template>

<script>
import AppSlotItem from "@/components/AppSlotItem.vue";
export default {
  components: { AppSlotItem },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
