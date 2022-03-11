<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
			<!-- 手机号码的输入 -->
      <inputGroup type="number" placeholder="请输入手机号"/>
    </div>
  </div>
</template>

<script>
import inputGroup from '../components/InputGroup.vue'//引入组件
export default {
  name:"login",
  data(){
    return{
      phone:'',
      verifyCode:"",
      errors:{},
      btnTitle:'获取验证码',
      disabled:false,
    }
  },
  components:{//注册组件
    inputGroup
  }
  
}
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
</style>