<template>
  <div class="main">
    <div class="d-flex">
      <div class="" style="position: relative">
        <SideNavVue />
      </div>
      <div class="w-100">
        <div style="position: relative"><HeaderVue /></div>

        <div class="slot-content"><slot></slot></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SideNavVue from '../components/SideNav.vue'
import HeaderVue from '../components/Header.vue'
</script>
<style scoped>
.slot-content {
  height: calc(100vh - 60px);
  overflow-y: auto;
}
.slot-content::-webkit-scrollbar {
  width: 0;
}
.main {
  height: 100vh;
  overflow: hidden;
}
</style>
