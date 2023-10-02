<template>
  <div class="sidebar">
    <!-- <h1>Sidebar</h1> -->
    <div class="logo-viet">
      <router-link to="/"
        ><img src="../assets/img/vietpost.png" style="height: 100px; padding-left: 40px" alt=""
      /></router-link>
    </div>
    <nav id="sidebarMenu">
      <ul id="ul-sidebar" class="nav flex-column">
        <li class="nav-item">
          <router-link to="/" class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Trang chủ</span>
          </router-link>
        </li>
        <li class="nav-item" @click="toggleOrder">
          <a class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Tạo đơn</span>
          </a>
        </li>
        <li class="nav-item" v-if="orderIsOpen">
          <router-link
            :to="{ name: 'tao-don-le' }"
            class="nav-link d-flex"
            style="background: #d6d6d6"
            href="#"
          >
            <!-- <div class="logo-nav-item"> -->
            <span class="span-sidebar ml-4">Tạo đơn lẻ</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="orderIsOpen">
          <router-link
            :to="{ name: 'nhap-excel' }"
            class="nav-link d-flex"
            style="background: #d6d6d6"
            href="#"
          >
            <!-- <div class="logo-nav-item"> -->
            <span class="span-sidebar ml-4">Nhập excel</span>
          </router-link>
        </li>
        <li class="nav-item" @click="toggleManageIsOpen">
          <a class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Quản lý</span>
          </a>
        </li>
        <router-link :to="{ name: 'manage-bill' }" v-show="manageIsOpen" class="nav-item">
          <a class="nav-link d-flex" href="#">
            <span class="span-sidebar ml-4">Quản lý vận đơn</span>
          </a>
        </router-link>
        <li class="nav-item">
          <a class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Tra cứu</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Quản lý bán hàng</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Tiện ích</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Cài đặt tài khoản</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Hỏi đáp</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const orderIsOpen = ref(false)
const manageIsOpen = ref(false)
const toggleOrder = () => {
  orderIsOpen.value = !orderIsOpen.value
}
const toggleManageIsOpen = () => {
  manageIsOpen.value = !manageIsOpen.value
}
</script>
