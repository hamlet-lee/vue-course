<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/custom/UpDown1User.vue
-->
<template>
  <div>
    <UpDown1 :val="a"/>
    外部：{{a}}
    提示：这是失败的示例！！！！！打开Console可以看到错误提示。
  </div>
</template>

<script>
import UpDown1 from './UpDown1.vue'
export default {
  components: {
    UpDown1
  },
  data () {
    return {
      a: 1
    }
  }
}
</script>

<style>

</style>
