<template>
  <DefaultLayout
    ><div class="excel-online">
      <div class="main-content">
        <div class="d-flex justify-content-between">
          <h4 class="float-left title-header font-weight-bold">Quản lý vận đơn</h4>
          <div class="d-flex float-right title-header"></div>
        </div>
        <div class="main-excel h-100 col-12 px-0">
          <div class="excel-input bg-white">
            <div class="card-body pt-2">
              <div class="row">
                <div class="form-group col-7">
                  <div class="dropdown">
                    <button
                      class="btn border-drop bg-lightt btn-dropdown btn-lightt dropdown-toggle d-flex align-items-center justify-content-between"
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
                <div class="form-group col-5">
                  <div class="d-felx">
                    <div class="float-left mt-2">
                      <span class="bold text-success font-weight-bold mr-3">Đơn hợp lệ: 0/0</span>
                      <span class="bold text-danger font-weight-bold mr-3">Đơn lỗi: 0/0</span>
                    </div>
                    <div class="float-right">
                      <button class="btn btn-outline-secondary btn-sm mr-1" title="Làm mới">
                        <i _ngcontent-fxj-c12="" class="fa fa-refresh"></i>
                      </button>
                      <button class="btn btn-outline-secondary btn-sm mr-1" title="Làm mới">
                        <i _ngcontent-fxj-c12="" class="fa fa-cog"></i>
                      </button>
                      <button class="btn btn-outline-secondary btn-sm mr-1" title="Làm mới">
                        <i _ngcontent-fxj-c12="" class="fa fa-plus"></i>
                      </button>
                      <button class="btn btn-success btn-sm mr-1" title="Làm mới">
                        <i class="fa-regular fa-file-excel"></i>
                      </button>
                      <button class="btn btn-outline-secondary btn-sm mr-1" title="Làm mới">
                        <i _ngcontent-fxj-c12="" class="fa fa-arrows-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div
  ></DefaultLayout>
</template>
<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>
