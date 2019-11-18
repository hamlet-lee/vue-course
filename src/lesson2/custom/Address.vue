<!--
启动方式：见 AddressUser.vue
 -->
<template>
  <div>
    <ul>
    <li>国家: {{addr.country}}</li>
    <li>省份: {{addr.province}}</li>
    <li>城市: {{addr.city}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    addr: Object
  }
}
</script>

<style>

</style>
