<template>
  <div class="header header-search shadow bg-white">
    <div class="input-group bg-light rounded w-50">
      <i class="fa fa-search" />
      <input
        type="search"
        class="input-search rounded"
        placeholder="Tra cứu đơn hàng"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="ul-info" class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-ite">
              <a class="nav-link notify" aria-current="page" href="#">
                <span>Thông báo</span>
                <img class="ico-notify" src="../assets/img/bell.svg" alt="" />
                <span class="num-not">49</span>
              </a>
            </li>
            <li id="phoneNumber" class="nav-ite">
              <span class="font-weight-bold">0909654321</span>
            </li>
            <li id="user" class="nav-ite">
              <img class="ico-notify" src="../assets/img/icon-user.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
