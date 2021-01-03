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
              <v-expansion-panel v-for="(item, i) in orderList" :key="i" @click="getDetailInfo(item)">
                <v-expansion-panel-header
                >
                  <div
                    style="
                      color: #007bff;
                      font-weight: bold;
                      width: 30px;
                      font-size: 20px;
                    "
                  >
                    {{ item.id }}
                  </div>
                  <div class="desserts">{{ item.code }}</div>

                  <div class="desserts">{{ item.billdate }}</div>
                  <div class="desserts">{{ item.cust_shipDate }}</div>
                  <div class="desserts">{{ item.qty }}</div>
                  <div class="desserts">{{ item.unit }}</div>
                  <v-icon small class="mr-2" color="#ff5252" title="编辑" @click.stop="goEdit(item.id)">
                    mdi-pencil
                  </v-icon>
                  <i class="fa fa-floppy-o" aria-hidden="true" title="确定"></i>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <table class="table table-borderless" >
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
                      <tr v-for="(item, i) in orderChildList" :key="i">
                        <td>{{item.cust_po}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.style_code}}</td>
                        <td>{{item.color}}</td>
                        <td>{{item.qty}}</td>
                        <td>{{item.unit}}</td>
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
      // 订单列表数据
      orderList: [],
      // 明细表数据
      orderChildList:[]
    };
  },

  created() {
    this.getUserInfo();
    
    if (localStorage.getItem("user")) {
      this.isLogin = true;
    }

    this.getOrderInfo();
  },

  methods: {
    // 跳转页面
    goPage(name) {
      this.$router.push({ name });
    },

    // 跳转至对应的编辑页面
    goEdit(id){
      this.$router.push({name: 'EditOrder', query: {id}});
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

    // 获取订单列表信息
    getOrderInfo(){
      this.axios({
        methods: "GET",
        url: "http://wx.hengfeng-zl.cn/dingtalk/weborders.ashx",
        params: {
          ctype: "getOrderList",
          cust_id: 1124
        }
      }).then((res)=>{
        this.orderList = res.data.data;
      }).catch((err)=>{

      })
    },

    // 获取详细信息
    getDetailInfo(item){
      this.axios({
        methods: "GET",
        url: "http://wx.hengfeng-zl.cn/dingtalk/weborders.ashx",
        params: {
          ctype: "getOrderInfo",
          orderId: item.id
        }
      }).then((res)=>{
        this.orderChildList = res.data.orderD;
      }).catch((err)=>{

      })
    }
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