<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/custom/UpDown2User.vue
-->
<template>
  <div>
    <UpDown2 :o="o1"/>
    外部：{{o1.val}}

    <br/>
    <input type="button" @click="o1.val = 100" value="外部设置 o1.val = 100">
    <input type="button" @click="o1 = {val: 200}" value="外部替换 o1 = {val:200}">
  </div>
</template>

<script>
import UpDown2 from './UpDown2.vue'
export default {
  components: {
    UpDown2
  },
  data () {
    return {
      o1: {
        val: 1
      }
    }
  }
}
</script>

<style>

</style>
