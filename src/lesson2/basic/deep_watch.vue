<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/basic/deep_watch.vue
-->
<template>
  <div>
    a <input type="text" v-model="o.a"/><br/>
    b <input type="text" v-model="o.b"/><br/>
    c = a + b = <span>{{c}}</span>
    <br/>
    这里演示：用deep watch监听o = {a, b} 变化，然后更新c
  </div>
</template>

<script>
export default {
  data () {
    return {
      o: {
        a: '1',
        b: '2'
      },
      c: '3'
    }
  },
  watch: {
    // 因为设置了deep: true, this.o / this.o.a / this.o.b 变化，都会导致 handler 被触发
    'o': {
      handler: function (newVal, oldVal) {
        this.c = parseInt(this.o.a) + parseInt(this.o.b)
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
