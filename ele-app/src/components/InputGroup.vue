<template>
  <div class="inputGroup">
    <!-- 组件结构 -->

    <!-- 组件容器 -->
    <div class="input_group">
      <!-- 输入框 -->
      <input :type="type" :value="value" :placeholder="placeholder" :name="name" @input="$emit('input',$event.target.value)">
      <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
      <!-- 显示错误提醒 -->
      <div class="valid-feedback" v-if="error">{{error}}</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'inputGroup',
    props:{
      type:{
        type:String,
        default:'text',//默认文本类型
      },
      value:String,//输入框绑定的值
      placeholder:String,
      name:String,
      btnTitle:String,//这是是点击获取验证码
      disabled:Boolean,//是否显示布尔值
      error:String,//错误提示
    }
  }
</script>
<style scoped>
  /* 组件样式 */
  .input_group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input_group input {
  height: 100%;
  width: 60%;
  outline: none;
}
.input_group button {
  border: none;
  outline: none;
  background: #fff;
}
.input_group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 5px;
}
</style>