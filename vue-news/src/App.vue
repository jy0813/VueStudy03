<template>
  <div id="app">
    <Toolbar></Toolbar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Toolbar from "./components/ToolBar.vue";

export default {
  components: { Toolbar },
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
