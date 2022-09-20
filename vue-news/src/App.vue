<template>
  <div id="app">
    <Toolbar></Toolbar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import Toolbar from "./components/ToolBar.vue";
import Spinner from "./views/Spinner.vue";
import bus from "./utils/bus.js";

export default {
  components: { Toolbar, Spinner },
  data() {
    return {
      loadingStatus: false,
    };
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #41b883;
  text-decoration: underline;
}
</style>
