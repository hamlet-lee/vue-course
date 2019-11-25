<!--
启动方式：见 UpDown1User.vue
 -->
<template>
  <div>
    内部：{{val}}
    <input type="button" @click="val = val + 1" value="+"/>
    <input type="button" @click="val = val - 1" value="-"/>
  </div>
</template>

<script>
export default {
  props: {
    val: Number
  }
}
</script>

<style>

</style>
