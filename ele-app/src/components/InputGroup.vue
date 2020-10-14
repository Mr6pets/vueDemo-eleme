<template>
  <div class="inputGroup">
    <div class=""></div>
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
      value:String,
      placeholder:String,
      btnTitle:String,
      disabled:Boolean,
      error:String,//
    }
  }
</script>
<style scoped>

</style>