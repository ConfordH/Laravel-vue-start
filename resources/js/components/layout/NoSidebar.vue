<template>
  <div class="app">
    <Navbar />
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script>
import Navbar from "../layout/Navbar";
export default {
  name: "NoSidebar",
  components: {
    Navbar
  }
};
</script>
