<template>
  <DefaultLayout
    ><div class="excel-online">
      <div class="main-content">
        <div class="d-flex justify-content-between">
          <h4 class="title-header font-weight-bold">Quản lý vận đơn</h4>
          <div class="d-flex title-header mr-5">
            <div class="form-group">
              <div class="dropdown">
                <button
                  class="btn w-order border-drop bg-lightt btn-dropdown btn-lightt dropdown-toggle d-flex align-items-center justify-content-between"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="drop-item mr-4">Đơn hàng gửi</div>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <!-- Tạo thanh tìm kiếm bằng input -->
                  <li>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Tìm kiếm"
                      aria-label="Search"
                      id="dropdown-search"
                    />
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Mục 1</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Mục 2</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Mục 3</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Mục 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="main-excel h-100 col-12 px-0">
          <div class="excel-input bg-white">
            <div class="card-body pt-3">
              <div class="row">
                <div class="form-group col-3 exchange-order pr-0 d-flex">
                  <div class="input-group col-12 px-0 w-test">
                    <input
                      type="tel"
                      class="form-control border-r-no bg-none form-reci"
                      id="phone"
                      placeholder="Tìm đơn hàng, số điện thoại"
                    />
                    <!-- <div class="input-group-append"> -->
                    <button
                      class="input-group-text position-relative btn btn-add"
                      style="border: #ee0033 solid 1px; padding: 17px"
                    >
                      <i _ngcontent-exw-c12="" class="fa fa-search fs" style="color: #ee0033"></i>
                    </button>
                    <!-- </div> -->
                  </div>
                </div>
                <div class="form-group col-2 pl-10">
                  <div class="calendar">
                    <input type="date" />
                  </div>
                </div>

                <div class="form-group col-2">
                  <div class="dropdown">
                    <button
                      class="btn w-all-order border-drop bg-lightt btn-dropdown btn-lightt dropdown-toggle d-flex align-items-center justify-content-between"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div class="drop-item mr-4">Tất cả kho hàng</div>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <!-- Tạo thanh tìm kiếm bằng input -->
                      <li>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Tìm kiếm"
                          aria-label="Search"
                          id="dropdown-search"
                        />
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Mục 1</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Mục 2</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Mục 3</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Mục 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group col-2">
                  <div class="dropdown">
                    <button
                      class="btn w-all-order border-drop bg-lightt btn-dropdown btn-lightt dropdown-toggle d-flex align-items-center justify-content-between"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div class="drop-item mr-4 cl-f2">Người trả cước</div>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <!-- Tạo thanh tìm kiếm bằng input -->
                      <li>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Tìm kiếm"
                          aria-label="Search"
                          id="dropdown-search"
                        />
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Mục 1</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Mục 2</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Mục 3</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Mục 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-body pt-0">
              <div class="row">
                <div class="col-12">
                  <button class="btn btn-print mr-2">
                    <img
                      _ngcontent-cpo-c12=""
                      width="15px"
                      height="15px"
                      src="../assets/img/printer-p.svg"
                    /><span _ngcontent-cpo-c12=""> In đơn</span>
                  </button>
                  <button class="btn bg-i-excel btn-print mr-2">
                    <img
                      _ngcontent-cpo-c12=""
                      d
                      width="15px"
                      height="15px"
                      src="../assets/img/printer-p.svg"
                    /><span _ngcontent-cpo-c12=""> Xuất excel</span>
                  </button>
                  <button class="btn bg-e-excel btn-print mr-2">
                    <i _ngcontent-cpo-c12="" class="fa fa-upload mr-1"></i
                    ><span _ngcontent-cpo-c12=""> Nhập excel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></DefaultLayout
  >
</template>
<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>
<style scoped>
.btn-print {
  background-color: #0068a5;
  height: 33px;

  text-transform: uppercase;
  width: 155px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
}
.bg-i-excel {
  background-color: rgb(31, 96, 51);
}
.bg-e-excel {
  background-color: rgb(0, 75, 71);
}
</style>
