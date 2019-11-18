<!--
启动方式：见 UpDown3User.vue
 -->
<template>
  <div>
    内部：{{v}}
    <input type="button" @click="v = v + 1; $emit('val-changed', v);" value="+"/>
    <input type="button" @click="v = v - 1; $emit('val-changed', v);" value="-"/>
  </div>
</template>

<script>
export default {
  props: {
    val: Number
  },
  data: function () {
    return {
      v: this.val
    }
  },
  watch: {
    // 试试去掉这个watch项，会有什么情况发生
    'val': function (newVal, oldVal) {
      this.v = newVal
    }
  }
}
</script>

<style>

</style>
