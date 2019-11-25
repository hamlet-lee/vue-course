<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/basic/watch_computed.vue
-->
<template>
  <div>
    a <input type="text" v-model="a"/><br/>
    b <input type="text" v-model="b"/><br/>
    c = a + b = <span>{{c}}</span>
    <br/>
    这里演示：用computed监听a, b变化，并触发x的变化，
    x 的变化则触发watch的动作；这是在网上搜到的方式，个人不建议使用。
    因为这种做法会让逻辑变得较复杂。
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
  computed: {
    x: function () {
      // 这里仅对a, b 做简单读取，就会隐式地让 x 依赖于 a 和 b

      // eslint-disable-next-line no-unused-vars
      let a = this.a
      // eslint-disable-next-line no-unused-vars
      let b = this.b

      // 经测试，这里返回原子常量，例如 'abc', 123 或者 某个固定引用，是达不到效果的；
      // 而简单返回个新对象 {} 就能达到效果
      return {}
    }
  },
  watch: {
    'x': function (newVal, oldVal) {
      this.c = parseInt(this.a) + parseInt(this.b)
    }
  }
}
</script>

<style>

</style>
