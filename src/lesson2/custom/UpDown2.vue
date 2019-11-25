<!--
启动方式：见 UpDown2User.vue
 -->
<template>
  <div>
    内部：{{o.val}}
    <input type="button" @click="o.val = o.val + 1" value="+"/>
    <input type="button" @click="o.val = o.val - 1" value="-"/>
  </div>
</template>

<script>
export default {
  props: {
    o: Object
  }
}
</script>

<style>

</style>
