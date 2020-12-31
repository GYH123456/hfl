<template>
  <div class="orderQuery">
    <nav
      class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
      <a
        class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
        @click="goPage('Main')"
        >恒丰利</a
      >
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--<input class="form-control form-control-dark w-auto" type="text" placeholder="Search" aria-label="Search">-->
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap" v-if="isLogin">
          <span style="color: aliceblue">欢迎，{{ username }}</span>
        </li>
      </ul>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap" v-if="isLogin">
          <a class="nav-link" @click="logout">退出</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div class="sidebar-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" @click="goPage('Main')">
                  <span data-feather="home"></span>
                  首页 <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" @click="goPage('OrderInfo')">
                  <span data-feather="file"></span>
                  创建订单
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active">
                  <span data-feather="shopping-cart"></span>
                  订单查询
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <span data-feather="users"></span>
                  客户
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <span data-feather="bar-chart-2"></span>
                  报表
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <span data-feather="layers"></span>
                  系统设置
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 px-md-4"
          id="main"
        >
          <div style="margin: 8px 0 10px"><h5>订单查询</h5></div>
          <!-- 订单展示 -->
          <!-- 标题 -->

          <v-app id="inspire">
            <v-simple-table>
              <template>
                <thead>
                  <tr>
                    <th
                      class="text-left"
                      style="width: 9.4rem;"
                    ></th>
                    <th
                      class="text-left"
                      style="width: 11.5rem;"
                    >
                      订单编号
                    </th>
                    <th
                      class="text-left"
                      style="width: 12rem;"
                    >
                      订单日期
                    </th>
                    <th
                      class="text-left"
                      style="width: 12rem;"
                    >
                      交货日期
                    </th>
                    <th
                      class="text-left"
                      style="width: 8.2rem;"
                    >
                      重量
                    </th>
                    <th
                      class="text-left"
                      style="width: 6rem;"
                    >
                      单位
                    </th>
                    <th
                      class="text-left"
                      style="width: 19.5rem;"
                    ></th>
                  </tr>
                </thead>
              </template>
            </v-simple-table>

            <v-expansion-panels focusable popout>
              <v-expansion-panel v-for="(item, i) in 5" :key="i">
                <v-expansion-panel-header
                  v-for="item in desserts"
                  :key="item.code"
                >
                  <div
                    style="
                      color: #007bff;
                      font-weight: bold;
                      width: 30px;
                      font-size: 20px;
                    "
                  >
                    {{ i + 1 }}
                  </div>
                  <div class="desserts">{{ item.code }}</div>

                  <div class="desserts">{{ item.orderDate }}</div>
                  <div class="desserts">{{ item.shipDate }}</div>
                  <div class="desserts">{{ item.weight }}</div>
                  <div class="desserts">{{ item.unit }}</div>
                  <v-icon small class="mr-2" color="#ff5252" title="编辑" @click="goEdit()">
                    mdi-pencil
                  </v-icon>
                  <i class="fa fa-floppy-o" aria-hidden="true" title="确定"></i>
                  <!-- <button type="button" class="btn btn-primary editor">
                    编辑
                  </button>
                  <button type="button" class="btn btn-primary comfirm">
                    确定
                  </button> -->
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">客布号</th>
                        <th scope="col">产品名称</th>
                        <th scope="col">款号</th>
                        <th scope="col">颜色</th>
                        <th scope="col">重量</th>
                        <th scope="col">单位</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                    </tbody>
                  </table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-app>
        </main>
      </div>
    </div>
    <footer class="py-5 bg-dark fixed-bottom">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; 恒丰利织造有限公司 2020
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import "../assets/css/orderquery.less";
import "../assets/css/adminhome.less";
import "../assets/css/dashboard.less";

export default {
  data() {
    return {
      // 用户名
      username: "",
      // 检测是否登录
      isLogin: false,
      desserts: [
        {
          code: "HOF2012134",
          orderDate: "2020-12-25",
          shipDate: "2020-12-26 14:00",
          weight: 100.12,
          unit: "LBS",
        },
      ],
    };
  },

  created() {
    this.getUserInfo();
    if (localStorage.getItem("user")) {
      this.isLogin = true;
    }
  },

  methods: {
    // 跳转页面
    goPage(name) {
      this.$router.push({ name });
    },

    // 跳转至对应的编辑页面
    goEdit(){
      this.$router.push({name: 'EditOrder'});
    },

    // 获取用户信息
    getUserInfo() {
      this.username = localStorage.getItem("user");
    },

    // 退出登录
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-expansion-panel-content__wrap {
  padding: 5px 15px 1px;
}
::v-deep .v-expansion-panel {
  max-width: 100%;
}
::v-deep
  .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr
  > th {
  font-size: 1rem;
  color: black;
}

::v-deep .v-icon.v-icon.v-icon--link{
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
</style>