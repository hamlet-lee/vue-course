<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/basic/bind.vue
-->
<template>
  <div>
    文本：{{x}}<br/>
    文本框：<input type="text" v-model="x"/><br/>
    两者都绑定到了data的“x”成员
  </div>
</template>

<script>
export default {
  data () {
    return {
      x: 'hello'
    }
  }
}
</script>

<style>

</style>
