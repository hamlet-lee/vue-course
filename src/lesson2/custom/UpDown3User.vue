<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/custom/UpDown3User.vue
-->
<template>
  <div>
    <!-- 参考：https://www.jianshu.com/p/4147d3ed2e60 -->
    <UpDown3 :val = "v1" @val-changed="v1 = $event"/>
    外部：{{v1}}
    <br/>
    <input type="button" @click="v1 = 100" value="外部设置 v1 = 100">
  </div>
</template>

<script>
import UpDown3 from './UpDown3.vue'
export default {
  components: {
    UpDown3
  },
  data () {
    return {
      v1: 1
    }
  }
}
</script>

<style>

</style>
