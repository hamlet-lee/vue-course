<template>
  <div>
    <input type="text" v-model="a"/> <input type="button" value="set" @click="onSet"/><br>
    <input type="text" v-model="b"/> <input type="button" value="get" @click="onGet"/><br>
    其实import的模型很好理解，理解成单实例(singleton)即可。<br>
    这里 f1.js -> lib.js 和 f2.js -> lib.js 其实引用的是 lib.js 的同一个实例。<br>
    因此共享变量a。
  </div>
</template>

<script>
import { f1 } from './f1.js'
import { f2 } from './f2.js'
export default {
  data () {
    return {
      a: '1',
      b: ''
    }
  },
  methods: {
    onSet () {
      let x = parseInt(this.a)
      f1(x)
    },
    onGet () {
      let y = f2()
      this.b = y
    }
  }
}
</script>

<style>

</style>
