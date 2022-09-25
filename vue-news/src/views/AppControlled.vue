<template>
  <div><AppCheckBox v-model="checked"></AppCheckBox></div>
</template>

<script>
import AppCheckBox from "@/components/AppCheckBox.vue";
export default {
  components: { AppCheckBox },
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style scoped></style>
