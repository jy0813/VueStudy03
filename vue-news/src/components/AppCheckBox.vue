<template>
  <input :value="value" type="checkbox" @click="toggleCheckBox" />
</template>

<script>
export default {
  props: ["value"],
  methods: {
    toggleCheckBox() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style scoped></style>
