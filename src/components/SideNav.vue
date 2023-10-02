<template>
  <div class="sidebar">
    <!-- <h1>Sidebar</h1> -->
    <div class="logo-viet bg-white">
      <a href="">
        <img src="../assets/img/vietpost.png" width="200px" height="108px" alt="" />
      </a>
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
        <li class="nav-item">
          <router-link :to="{ name: 'tao-don-le' }" class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Tạo đơn</span>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex" href="#">
            <!-- <div class="logo-nav-item"> -->
            <img class src="../assets/img/pie-chart-gray.svg" alt="" />
            <span class="span-sidebar ml-4">Quản lý</span>
          </a>
        </li>
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
