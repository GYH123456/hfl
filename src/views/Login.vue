<template>
  <div class="login">
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      <div class="container">
        <a class="navbar-brand" @click="goPage('Main')"
          ><img
            src="../assets/images/logo.png"
            width="50"
            height="50"
            alt=""
            loading="lazy"
          />
          中山市恒丰利织造有限公司</a
        >
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" style="margin-right: 16px">
              <a class="nav-link">关于我们</a>
            </li>

            <li class="nav-item" style="margin-right: 16px">
              <a class="nav-link">联系我们</a>
            </li>
            <li class="nav-item" style="margin-right: 16px">
              <a class="nav-link">客户登录</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">公司内部登录</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-form-title" :style="note">
            <span class="login100-form-title-1"> 登录 </span>
          </div>

          <div
            class="login100-form validate-form"
            name="userForm"
            id="usersForm"
          >
            <div
              class="wrap-input100 validate-input m-b-26"
              data-validate="用户必填"
            >
              <span class="label-input100">用户名：</span>
              <input
                v-model="username"
                class="input100"
                type="text"
                name="txtLoginName"
                id="txtLoginName"
                placeholder="请输入用户名"
                required
                autofocus
              />
              <span class="focus-input100"></span>
            </div>

            <div
              class="wrap-input100 validate-input m-b-18"
              data-validate="密码必填"
            >
              <span class="label-input100">密码：</span>
              <input
                v-model="password"
                class="input100"
                type="password"
                name="txtPassWord"
                id="txtPassWord"
                placeholder="请输入密码"
                required
              />
              <span class="focus-input100"></span>
            </div>

            <div class="flex-sb-m w-full p-b-30">
              <div class="contact100-form-checkbox">
                <input
                  v-model="remember"
                  class="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label class="label-checkbox100" for="ckb1"> 记住我 </label>
              </div>

              <div>
                <a href="#" class="txt1"> 忘记密码? </a>
              </div>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn" id="btnLogin" @click="login">
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/login.less";
import "../assets/css/util.less";

// 引入base64
const Base64 = require("js-base64").Base64;

export default {
  data() {
    return {
      username: "",
      password: "",
      remember: "",
      note: {
        backgroundImage: "url(" + require("../assets/images/bg-01.jpg") + ")",
      },
    };
  },

  created() {
    // 在页面加载时从cookie获取登录信息
    let username = this.getCookie("username");
    let password = this.getCookie("password");
    // 如果存在赋值给表单，并将记住我勾选
    if (username) {
      this.username = username;
      this.password = password;
      this.remember = true;
    }
  },

  methods: {
    goPage(name) {
      this.$router.push({ name });
    },

    login() {
      this.axios({
        methods: "GET",
        url: "./data/login.json",
        params: {
          username: this.username,
          password: this.password,
        },
      })
        .then((res) => {
          var data = res.data;
          if (
            this.username == data.username &&
            this.password == data.password
          ) {
            this.$router.push({ name: "AdminHome" });
            // 本地存储用户名和密码信息
            localStorage.setItem("user", data.username);
          } else if (
            this.username == data.username ||
            this.password == data.password
          ) {
            alert("用户名或密码错误");
          }
        })
        .catch((err) => {});

      this.setUserInfo();
    },

    // 储存登录信息
    setUserInfo() {
      // 判断用户是否勾选记住我，如果勾选，向cookies中储存登录信息
      // 如果没有勾选，储存信息为空
      if (this.remember) {
        this.setCookie("username", this.username);
        // base64加密密码
        let password = Base64.encode(this.password);
        this.setCookie("password", this.password);
      } else {
        this.setCookie("username", "");
        this.setCookie("password", "");
      }
    },

    // 获取cookie
    getCookie(key) {
      if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(key + "=");
        if (start !== -1) {
          start = start + key.length + 1;
          var end = document.cookie.indexOf(";", start);
          if (end === -1) {
            end = document.cookie.length;
          }
          return unescape(document.cookie.substring(start, end));
        }
      }
      return "";
    },

    // 保存cookie
    setCookie(cName, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + 24 * 60 * 60 * 1000 * expiredays);
      document.cookie =
        cName +
        "=" +
        decodeURIComponent(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
    },
  },
};
</script>

<style lang="less" scoped>
.nav-link,
.navbar-brand {
  cursor: pointer;
}
.nav-link {
  font-size: 16px !important;
}
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem !important;
  line-height: inherit;
  white-space: nowrap;
  background-color: transparent;
  box-shadow: 0 0 0 transparent;
}
</style>
