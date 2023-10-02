<template>
  <div class="container-fluid">
    <!-- <h1>Hello</h1>- -->
    <div class="row">
      <div class="col-md-2 px-0">
        <SideNavVue />
      </div>
      <div class="col-md-10 px-0">
        <HeaderVue />
        <slot></slot>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-4">
      <div class="text-center">
        <p>&copy; 2023 Tên Công Ty. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  </div>
</template>
<script setup>
import SideNavVue from '../components/SideNav.vue'
import HeaderVue from '../components/Header.vue'
</script>
