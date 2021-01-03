<template>
  <div class="order-info">
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
                <a class="nav-link active">
                  <span data-feather="file"></span>
                  创建订单
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="goPage('OrderQuery')">
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
          <div><h5>订单录入</h5></div>
          <div
            class="menu"
            style="
              background-color: white;
              height: 50px;
              align-items: center;
              margin-top: 10px;
            "
          >
            <button
              type="button"
              class="btn btn-primary"
              style="margin-top: 8px"
              @click="newOrder()"
            >
              新建订单
            </button>
          </div>

          <div class="table">
            <div
              class="table-main"
              style="
                border: solid 1px #cccccc;
                margin-top: 10px;
                border-radius: 5px;
              "
            >
              <div class="form-group form-inline" style="margin: 20px 0 16px">
                <label for="companyName" style="margin-left: 10px"
                  >订单编号：</label
                >
                <input
                  :value="mainData.code"
                  type="text"
                  class="form-control"
                  id="code"
                  style="
                    margin-left: 5px;
                    width: 454px;
                    background-color: white;
                  "
                  disabled="disabled"
                />
              </div>

              <div class="row form-inline" style="margin: 10px 0 16px 0">
                <div class="form-group">
                  <label for="orderDate" style="margin-left: 10px"
                    >订单日期：</label
                  >
                  <input
                    v-model="orderDate"
                    type="text"
                    class="form-control"
                    id="orderDate"
                    style="
                      margin-left: 5px;
                      width: 168px;
                      background-color: white;
                    "
                    disabled="disabled"
                  />
                </div>
                <div class="form-group" style="margin-left: 20px" @click.stop>
                  <label for="shipDate">交货日期：</label>
                  <input
                    @change="changeCount()"
                    v-model="shipDate"
                    type="text"
                    class="form-control"
                    id="shipDate"
                    style="margin-left: 5px; width: 180px"
                  />
                </div>
              </div>

              <div class="form-group form-inline" style="margin-top: 10px">
                <label for="companyName" style="margin-left: 10px"
                  >公司名称：</label
                >
                <input
                  :value="mainData.cust_name"
                  type="text"
                  class="form-control"
                  id="companyName"
                  style="
                    margin-left: 5px;
                    width: 454px;
                    background-color: white;
                  "
                  disabled="disabled"
                />
              </div>

              <div
                class="form-group form-inline"
                style="margin: 10px 0 20px"
                @click.stop
              >
                <label for="notes" style="margin-left: 10px"
                  >备<span class="remark">注：</span></label
                >
                <textarea
                  @change="changeCount()"
                  v-model="notes"
                  type="text"
                  class="form-control form-note"
                  id="notes"
                  style="
                    margin-left: 5px;
                    width: 454px;
                    height: 60px;
                    resize: none;
                  "
                />
              </div>
            </div>
          </div>

          <template>
            <!-- 表格 -->
            <v-app id="inspire">
              <v-data-table
                :headers="headers"
                :items="desserts"
                sort-by="calories"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-dialog v-model="dialog" max-width="500px">
                      <!-- 增加数据按钮 -->
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="#007bff"
                          dark
                          class="mb-2"
                          v-bind="attrs"
                          v-on="on"
                          :disabled="!mainData.code"
                        >
                          增加数据
                        </v-btn>
                      </template>

                      <!-- 编辑区域 -->
                      <v-card>
                        <v-card-title>
                          <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" style="font-size: 0.8rem">
                                <v-text-field
                                  v-model="editedItem.cust_po"
                                  label="客布号"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="editedItem.name"
                                  label="产品名称"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="editedItem.style_code"
                                  label="款号"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="editedItem.color"
                                  label="颜色"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="editedItem.qty"
                                  label="重量"
                                  type="number"
                                  @keydown.native="inputLimit"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-select
                                  v-model="editedItem.unit"
                                  label="单位"
                                  :items="options"
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="close">
                            取消
                          </v-btn>
                          <v-btn color="blue darken-1" text @click="save()">
                            保存
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <!-- 删除确认区域 -->
                    <v-dialog v-model="dialogDelete" max-width="500px">
                      <v-card>
                        <v-card-title class="headline"
                          >确定要删除此数据吗?</v-card-title
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="closeDelete"
                            >取消</v-btn
                          >
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="deleteItemConfirm"
                            >确定</v-btn
                          >
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <!-- 编辑数据 -->
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                    title="编辑"
                    color="#007bff"
                  >
                    mdi-pencil
                  </v-icon>
                  <!-- 删除数据 -->
                  <v-icon
                    small
                    @click="deleteItem(item)"
                    title="删除"
                    color="#ff5252"
                  >
                    mdi-delete
                  </v-icon>
                </template>
              </v-data-table>
            </v-app>
          </template>
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
import $ from "jquery";

import "../assets/css/orderinfo.less";
import "../assets/css/adminhome.less";
import "../assets/css/dashboard.less";

export default {
  data() {
    return {
      // 登录名
      username: "",
      // 检测是否登录
      isLogin: false,
      // 主表数据
      mainData: {},
      // 是否展示增加数据区域
      dialog: false,
      // 是否展示删除数据区域
      dialogDelete: false,
      // 单位选择
      options: ["KG", "LBS"],
      // 订单日期
      orderDate: "",
      // 交货日期
      shipDate: "",
      // 备注
      notes: "",
      // 页面展示标题
      headers: [
        { text: "客布号", value: "cust_po", sortable: false },
        { text: "产品名称", value: "name", sortable: false },
        { text: "款号", value: "style_code", sortable: false },
        { text: "颜色", value: "color", sortable: false },
        { text: "重量", value: "qty", sortable: false },
        { text: "单位", value: "unit", sortable: false },
        { text: "操作", value: "actions", sortable: false },
      ],
      // 新增数据内容
      desserts: [],
      editedIndex: -1,
      // 当前在对话框中编辑的数据
      editedItem: {
        id: "",
        fid: "",
        cust_po: "",
        name: "",
        style_code: "",
        color: "",
        qty: "",
        unit: "",
        recode_by: "",
        status: "",
      },
      // 默认数据，用于新增对话框内容
      defaultItem: {
        id: "",
        fid: "",
        cust_po: "",
        name: "",
        style_code: "",
        color: "",
        qty: "",
        unit: "",
        recode_by: "",
        status: "",
      },
      dataRow: " ",
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "增加数据" : "修改数据";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.getUserInfo();

    if (localStorage.getItem("user")) {
      this.isLogin = true;
    }
  },

  mounted() {
    this.orderDate = this.todayDate();
    this.shipDate = this.shipdate();
  },

  methods: {
    // 跳转页面
    goPage(name) {
      this.$router.push({ name });
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

    // 默认日期为今天
    todayDate() {
      var date = new Date();
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },

    // 控制年月日时分选择
    shipdate() {
      var date = new Date();
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var h = date.getHours();
      var min = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      h = h < 10 ? "0" + h : h;
      min = min < 10 ? "0" + min : min;
      return y + "-" + m + "-" + d + " " + h + ":" + min;
    },

    // 重量禁止输入e，+，-
    inputLimit(e) {
      let key = e.key;
      if (key === "e" || key === "E" || key === "+" || key === "-") {
        e.returnValue = false;
        return false;
      }
      return true;
    },

    // 触发编辑按钮
    editItem(item) {
      // 找到修改数据的索引值
      this.editedIndex = this.desserts.indexOf(item);
      // 将未修改的值存进editedItem
      this.editedItem = Object.assign({}, item);
      // 确认修改
      this.dialog = true;
    },

    // 触发删除按钮
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    // 删除确认
    deleteItemConfirm() {
      this.editedItem.fid = this.mainData.id;
      this.editedItem.recode_by = this.username;
      this.editedItem.status = "delete";
      var subList = {
        ctype: "orderD",
      };
      var key2 = "Data";
      subList[key2] = this.editedItem;
      var subChildList = JSON.stringify(subList);

      this.axios
        .post("http://wx.hengfeng-zl.cn/dingtalk/weborders.ashx", subChildList)
        .then((res) => {
        })
        .catch((err) => {
        });

      // 删除相关的项
      this.desserts.splice(this.editedIndex, 1);

      this.closeDelete();
    },

    // 增加/修改数据-取消
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        // 初始化editedItem数据
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    // 删除数据-取消
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        // 初始化editedItem数据，清空
        this.editedItem = Object.assign({}, this.defaultItem);

        this.editedIndex = -1;
      });
    },

    // 增加/修改数据-保存
    save() {
      // 修改数据
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
        this.editedItem.fid = this.mainData.id;
        this.editedItem.recode_by = this.username;
        this.editedItem.status = "update";
        var subList = {
          ctype: "orderD",
        };
        var key2 = "Data";
        subList[key2] = this.editedItem;
        var subChildList = JSON.stringify(subList);

        this.axios
          .post(
            "http://wx.hengfeng-zl.cn/dingtalk/weborders.ashx",
            subChildList
          )
          .then((res) => {
          })
          .catch((err) => {
          });
      } else {
        // 增加数据
        if (
          !this.editedItem.name ||
          !this.editedItem.qty ||
          !this.editedItem.unit
        ) {
          return false;
        } else {
          this.editedItem.id = this.desserts.length + 1;
          this.editedItem.fid = this.mainData.id;
          this.editedItem.recode_by = this.username;
          this.editedItem.status = "insert";
          var subList = {
            ctype: "orderD",
          };
          var key2 = "Data";
          subList[key2] = this.editedItem;
          var subChildList = JSON.stringify(subList);

          this.axios
            .post(
              "http://wx.hengfeng-zl.cn/dingtalk/weborders.ashx",
              subChildList
            )
            .then((res) => {
              this.desserts.push(subList[key2]);

              this.dataRow = res.data.row;

              var saveIndex = this.desserts.indexOf(subList[key2]);

              this.desserts[saveIndex].id = this.dataRow;

            })
            .catch((err) => {

            });
        }
      }
      this.close();
    },

    // 新增订单
    newOrder() {
      this.axios({
        methods: "GET",
        url: "http://wx.hengfeng-zl.cn/dingtalk/weborders.ashx",
        params: {
          ctype: "getOrderCode",
          cust_id: 1124,
          record_by: this.username,
        },
      })
        .then((res) => {
          console.log("新增订单res==>", res);
          this.mainData = res.data.data[0];
        })
        .catch((err) => {});
    },

    //提交主表单
    changeCount: function () {
      if (!this.mainData.code) {
        return false;
      } else {
        var mainList = {
          ctype: "orderM",
        };
        var newMainData = {
          id: this.mainData.id,
          code: this.mainData.code,
          cust_id: 1124,
          cust_name: this.mainData.cust_name,
          cust_shipdate: this.shipDate,
          notes: this.notes,
          recode_by: this.username,
          status: "update",
        };
        var key1 = "Data";
        mainList[key1] = newMainData;

        var subMainList = JSON.stringify(mainList);

        this.axios
          .post("http://wx.hengfeng-zl.cn/dingtalk/weborders.ashx", subMainList)
          .then((res) => {
          })
          .catch((err) => {
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-size: 0.95rem;
  color: black;
  font-weight: 400;
  text-align: center !important;
  padding: 0px;
}
::v-deep .col-12 {
  height: 70px;
}

::v-deep .v-application .headline,
.v-card__title .headline {
  font-size: 1.2rem !important;
}

::v-deep .v-dialog > .v-card > .v-card__actions {
  padding: 0 16px;
}

::v-deep .v-dialog > .v-card > .v-card__title {
  padding: 16px 24px 0px;
}

::v-deep .v-btn.v-size--default {
  width: 90px;
  height: 38px;
  font-size: 1rem;
  outline: #007bff;
}

::v-deep .v-btn--contained,
.v-application .elevation-1 {
  box-shadow: 0 0 0 0 white !important;
}

::v-deep .v-toolbar__content,
.v-toolbar__extension {
  padding: 0;
}

::v-deep .v-data-table__wrapper {
  border: 1px solid #cccccc;
  border-radius: 5px;
}
::v-deep .v-data-footer {
  display: none;
}
::v-deep .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  text-align: center !important;
}
::v-deep .v-expansion-panel-content:last-child {
  margin-bottom: 50px !important;
}
</style>