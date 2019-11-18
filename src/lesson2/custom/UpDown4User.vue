<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/custom/UpDown4User.vue
-->
<template>
  <div>
    <UpDown4 v-model="v1"/>
    外部：{{v1}}

    <br/>
    <input type="button" @click="v1 = 100" value="外部设置 v1 = 100">
  </div>
</template>

<script>
import UpDown4 from './UpDown4.vue'
export default {
  components: {
    UpDown4
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
