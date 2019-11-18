<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/basic/watch.vue
-->
<template>
  <div>
    a <input type="text" v-model="a"/><br/>
    b <input type="text" v-model="b"/><br/>
    c = a + b = <span>{{c}}</span>
    <br/>
    这里演示：用watch监听a和b变化，然后更新c
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: '1',
      b: '2',
      c: '3'
    }
  },
  watch: {
    // 提示：这里用两个watch来实现此功能并不科学，更合适的方式是computed
    'a': function (newVal, oldVal) {
      this.c = parseInt(this.a) + parseInt(this.b)
    },
    'b': function (newVal, oldVal) {
      this.c = parseInt(this.a) + parseInt(this.b)
    }
  }
}
</script>

<style>

</style>
