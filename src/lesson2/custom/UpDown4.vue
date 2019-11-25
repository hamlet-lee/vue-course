<!--
启动方式：见 UpDown4User.vue
 -->
<template>
  <div>
    内部：{{v}}
    <input type="button" @click="v = v + 1; $emit('input', v);" value="+"/>
    <input type="button" @click="v = v - 1; $emit('input', v);" value="-"/>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  data () {
    return {
      v: this.value
    }
  },
  watch: {
    // 试试去掉这个watch项，会有什么情况发生
    'value': function (newVal, oldVal) {
      this.v = newVal
    }
  }
}
</script>

<style>

</style>
