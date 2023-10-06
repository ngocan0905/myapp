<template>
  <DefaultLayout>
    <div class="content bg-lightt w-100 h-100">
      <!-- <h1>content</h1> -->
      <div class="welcome-user d-flex align-items-center">
        <div class="h4-welcome-phone my-3 mr-5">
          <h4>Xin chào <span class="font-weight-bold">0909654321</span></h4>
        </div>
        <div class="calendar">
          <input type="date" />
        </div>
      </div>
      <div class="main-content">
        <div class="row mr-3 w-100">
          <div class="header-main-content col-12 d-flex align-items-center pb-3">
            <div class="logo-tienhang">
              <img src="../assets/img/tienhang.svg" alt />
            </div>
            <span class="font-weight-bold fs-33 pr-5">TIỀN HÀNG</span>
            <router-link :to="{ name: 'static-order' }" class="fs-33" href
              >Xem chi tiết</router-link
            >
          </div>
          <div class="col-md-4 form-group">
            <div class="card">
              <div class="card-body d-flex align-items-center justify-content-between">
                <img
                  src="../assets/img/business-and-finance.svg"
                  style="height: 50px"
                  class
                  alt="Ảnh"
                />
                <div class="paid">
                  <div class="card-text pl-1">Đã trả tiền</div>
                  <h4 class="font-weight-bold pl-5">0 ₫</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 form-group pl-0">
            <div class="card">
              <div class="card-body d-flex align-items-center justify-content-between">
                <img
                  src="../assets/img/business-and-finance.svg"
                  style="height: 50px"
                  class
                  alt="Ảnh"
                />
                <div class="paid">
                  <div class="card-text pl-1">Chờ trả tiền</div>
                  <h4 class="font-weight-bold pl-5">0 ₫</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 form-group pl-0">
            <div class="card">
              <div class="card-body d-flex align-items-center justify-content-between">
                <img
                  src="../assets/img/business-and-finance.svg"
                  style="height: 50px"
                  class
                  alt="Ảnh"
                />
                <div class="paid">
                  <div class="card-text pl-1">Chưa đối soát</div>
                  <h4 class="font-weight-bold pl-5">0 ₫</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="order_statistics col-md-9">
            <div class="header-main-content col-12 d-flex align-items-center pb-3">
              <div class="logo-tienhang">
                <img src="../assets/img/thongkedonhang.svg" alt="" />
              </div>
              <span class="font-weight-bold fs-33 pr-5">THỐNG KÊ ĐƠN HÀNG</span>
              <a class="fs-33" href>Xem chi tiết</a>
            </div>
          </div>
          <div class="top_10 col-md-3"></div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>
