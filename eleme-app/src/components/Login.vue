<template>
  <div class="login">
    <!-- logo -->
    <div class="logo">
      <img src="../assets/eleme-logo.jpg" />
    </div>
    <!-- 手机号登录获取验证码 -->
    <InputGroup
      type="number"
      placeholder="手机号"
      v-model="phone"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <!-- 验证码 -->
    <InputGroup type="number" placeholder="验证码" v-model="verifyCode" :error="errors.code" />
    <!-- 协议 -->
    <div class="login_des">
      <p>
        新用户登录即自动注册，表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "./commom/InputGroup";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      verifyCode: "",
      errors: {},
      btnTitle: "获取验证码",
      disabled: false
    };
  },
  methods: {
    //获取验证码
    getVerifyCode() {
      console.log(this.errors.phone);
      //判断手机号是否是合法的
      if (this.validatePhone()) {
        //倒计时
        this.validateBtn();
        // 如果手机号是合法的，发送网络请求请求
        this.$axios
          .post("/api/post/sms_send", {
            tpl_id: "192685",
            key: "729b68e7a24fa0ae7625d14b1eaa52d5",
            tpl_value: "#code#=''",
            phone: this.phone
          })
          .then(res => {
            console.log(res);
          });
      }
    },
    //倒计时
    validateBtn() {
      let time = 5;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    validatePhone() {
      //手机号验证
      if (!this.phone) {
        this.errors = {
          phone: "手机号不能为空"
        };
        return false;
      } else if (!/^1[345678]\d{9}/.test(this.phone)) {
        this.errors = {
          phone: "请填写正确的手机号码"
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    }
  },
  components: {
    InputGroup
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}
.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>
