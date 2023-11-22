<template>
  <div class="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import Default from "../components/layout/Default.vue";
import NoSidebar from "../components/layout/NoSidebar.vue";
const defult_layout = Default;
export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout || defult_layout;
    }
  }
};
</script>
