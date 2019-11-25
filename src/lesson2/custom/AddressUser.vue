<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/custom/AddressUser.vue
-->
<template>
  <div>
    <Address :addr="addr1"/>
  </div>
</template>

<script>
import Address from './Address'
export default {
  components: {
    Address
  },
  data () {
    return {
      addr1: {
        country: '中国',
        province: '广西',
        city: '桂林'
      }
    }
  }
}
</script>

<style>

</style>
