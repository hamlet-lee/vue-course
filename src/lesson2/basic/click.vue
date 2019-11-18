<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/basic/click.vue
-->
<template>
  <div>
    <input type="text" v-model="a"/> +
    <input type="text" v-model="b"/>
    <!-- 这里 @click="onClick" 即绑定 click 到 onClick 方法 -->
    <input type="button" value="=" @click="onClick"/> {{c}}
    <br/>
    这里演示：点击 '=' 后，触发 methods 中的 'onClick'；后者会更新 'c'
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: '1',
      b: '2',
      c: ''
    }
  },
  methods: {
    onClick: function () {
      this.c = parseInt(this.a) + parseInt(this.b)
    }
  }
}
</script>

<style>

</style>
