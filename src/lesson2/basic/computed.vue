<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/basic/computed.vue
-->
<template>
  <div>
    a <input type="text" v-model="a"/><br/>
    b <input type="text" v-model="b"/><br/>
    c = a + b = <span>{{c}}</span>
    <br/>
    这里演示：用computed隐式感知a和b变化，然后更新到 'c'
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: '1',
      b: '2'
    }
  },
  computed: {
    // 这里对a和b变化的感知是隐式的，非常“魔法”的
    // 参考：https://cn.vuejs.org/v2/guide/reactivity.html
    'c': function () {
      // 计算结果return出去即可，外部读取 key ('c') 即可获得结果；
      // 不要在这里改变this.x的值
      // 否则容易造成逻辑混乱，形成死循环等
      return parseInt(this.a) + parseInt(this.b)
    }
  }
}
</script>

<style>

</style>
