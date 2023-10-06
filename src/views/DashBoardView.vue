<template>
  <DefaultLayout>
    <div class="vtp-main">
      <div class="row">
        <!-- <h1>content</h1> -->
        <div
          class="pr-4 d-flex align-items-center col-md-8 d-flex align-items-start justify-content-between"
          style="height: 51px"
        >
          <h4>Xin chào <span class="font-weight-bold">0909654321</span></h4>
          <div class="calendar">
            <input type="date" />
          </div>
        </div>
        <div class="main-content">
          <div class="row section">
            <div
              class="header-main-content col-12 d-flex align-items-center"
              style="margin-bottom: 1rem"
            >
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
                  <div class="d-flex flex-column align-items-end">
                    <div class="card-text">Đã trả tiền</div>
                    <h4 class="font-weight-bold">0 ₫</h4>
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
                  <div class="d-flex flex-column align-items-end">
                    <div class="card-text">Chờ trả tiền</div>
                    <h4 class="font-weight-bold">0 ₫</h4>
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
                  <div class="d-flex flex-column align-items-end">
                    <div class="card-text">Chưa đối soát</div>
                    <h4 class="font-weight-bold">0 ₫</h4>
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
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.vtp-main {
  margin: 0;
  padding: 10px 27px 30px;
}
.form-group {
  padding: 0 15px 0 0;
  margin: 0 0 16px;
}
.card {
  padding: 20px;
}
.section {
  margin: 0 -15px;
}
</style>
