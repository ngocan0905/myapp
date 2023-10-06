<template>
  <DefaultLayout>
    <div class="vtp-main">
      <div class="table-create-order d-flex mt-4 ml-5 font-weight-bold" style="height: 48px">
        <div class="create-in ml-3">
          <span class="mr-5">Thống kê</span>
        </div>
        <div class="create-out">
          <span class="ml-5">Dòng tiền</span>
        </div>
      </div>
      <hr class="w-100" />
      <div class="vtp-main">
        <div class="main-content">
          <div class="d-flex justify-content-between row">
            <div class="col-md-7">
              <h4 class="font-weight-bold">Tiền hàng theo trạng thái (Tính theo ngày gửi)</h4>
            </div>

            <div class="d-flex col-md-5 row">
              <div class="form-group col-md-7">
                <div class="dropdown">
                  <button
                    class="btn border-drop w-100 bg-lightt btn-dropdown btn-lightt dropdown-toggle d-flex align-items-center justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style="padding: 6px 12px"
                  >
                    <div class="drop-item mr-4">COD gồm cước người nhận trả</div>
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
              <div class="form-group col-5 pr-0">
                <div class="calendar">
                  <input type="date" class="w-100" style="padding: 6px 12px 6px 30px" />
                </div>
              </div>
            </div>
          </div>

          <div class="main-excel h-100 col-12 px-0">
            <div class="border-none">
              <div class="card-body pt-3">
                <div class="row">
                  <div class="col-4 form-group pl-0">
                    <div class="card" style="padding: 20px">
                      <div class="card-body">
                        <h5 class="card-title">Số lượng đơn hàng</h5>
                        <p class="card-text bigNumber">
                          <span style="color: rgb(0, 166, 255)">0</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 form-group pl-0">
                    <div class="card" style="padding: 20px">
                      <div class="card-body">
                        <h5 class="card-title">
                          Tổng tiền thu hộ<i
                            aria-hidden="true"
                            class="fa fa-question-circle ml-2"
                            mattooltipclass="tool-tip"
                            style="
                              touch-action: none;
                              user-select: none;
                              -webkit-user-drag: none;
                              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                            "
                            aria-describedby="cdk-describedby-message-10"
                            cdk-describedby-host=""
                          ></i>
                        </h5>
                        <p class="card-text bigNumber">
                          <span style="color: #00c5bc">0 ₫</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 form-group pl-0">
                    <div class="card" style="padding: 20px">
                      <div class="card-body">
                        <h5 class="card-title">
                          Tổng tiền cước<i
                            aria-hidden="true"
                            class="fa fa-question-circle ml-2"
                            mattooltipclass="tool-tip"
                            style="
                              touch-action: none;
                              user-select: none;
                              -webkit-user-drag: none;
                              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                            "
                            aria-describedby="cdk-describedby-message-10"
                            cdk-describedby-host=""
                          ></i>
                        </h5>

                        <p class="card-text bigNumber">
                          <span style="color: #facc14">0 ₫</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-6"></div>
                  <div class="col-6">
                    <div class="form-group mb-0 table-sta w-100 bg-white">
                      <table class="sta_order w-100">
                        <thead role="rowgroup">
                          <tr role="rowgroup">
                            <th class="pl-tt pr-tt" style="color: #000">Trạng thái</th>
                            <th class="pl-3 pr-4 text-center" style="color: #000">Số đơn</th>
                            <th class="pl-3 pr-4 text-center" style="color: #000">
                              Tiền thu hộ (VNĐ)
                            </th>
                            <th class="pl-3 pr-4 text-center" style="color: #000">Tiền cước</th>
                          </tr>
                        </thead>
                        <tbody role="rowgroup">
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(51, 110, 161)"></div>
                              <a>Đang vận chuyển</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(81, 169, 245)"></div>
                              <a>Đang Giao</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(92, 184, 92)"></div>
                              <a>Giao thành công</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(246, 78, 41)"></div>
                              <a>Chờ xử lý</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(86, 67, 199)"></div>
                              <a>Đã duyệt hoàn</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(246, 175, 57)"></div>
                              <a>Đang chuyển hoàn</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(155, 79, 13)"></div>
                              <a>Đã trả</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(130, 193, 248)"></div>
                              <a>Phát tiếp</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- // main-2-sta-create -->
                <div class="row mt-5">
                  <div class="col-6"></div>
                  <div class="col-6">
                    <div class="form-group mb-0 table-sta w-100 bg-white">
                      <table class="sta_order w-100">
                        <thead role="rowgroup">
                          <tr role="rowgroup">
                            <th class="pl-tt pr-tt" style="color: #000">Trạng thái</th>
                            <th class="pl-3 pr-4 text-center" style="color: #000">Số đơn</th>
                            <th class="pl-3 pr-4 text-center" style="color: #000">
                              Tiền thu hộ (VNĐ)
                            </th>
                            <th class="pl-3 pr-4 text-center" style="color: #000">Tiền cước</th>
                          </tr>
                        </thead>
                        <tbody role="rowgroup">
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(2, 184, 177)"></div>
                              <a>Tạo mới</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(245, 211, 35)"></div>
                              <a>Chờ lấy</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(51, 186, 195)"></div>
                              <a>Đã lấy</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                          <tr role="row">
                            <td class="pl-4" role="gridcell">
                              <div class="ball" style="background: rgb(132, 137, 143)"></div>
                              <a>Đã hủy</a>
                            </td>
                            <td class="text-center" role="gridcell">0</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                            <td class="text-center" role="gridcell">0 ₫</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
.table-sta {
  border: 1px solid rgb(222, 226, 230) !important;
}
.table-sta thead,
.table-sta tbody tr {
  border-bottom: 1px solid rgb(222, 226, 230) !important;
}
tr td a {
  color: #72828b !important;
}
.table-sta tr:hover {
  background-color: rgb(227, 240, 240);
}

.sta_order tr {
  height: 56px;
}
.ball {
  width: 10px;
  height: 10px;
  float: left;
  border-radius: 5px;
  margin: 4px 5px 0 0;
}
table.sta_order th {
  text-align: left; /* Căn giữa ngang */
  vertical-align: middle; /* Căn giữa dọc */
  white-space: pre;
}

.pr-tt {
  padding-right: 10%;
}
.pl-tt {
  padding-left: 4%;
}
.form-group {
  padding: 0 15px 0 0;
  margin: 0 0 16px;
}
.card-title {
  margin: 0 0 12px;
}
</style>
