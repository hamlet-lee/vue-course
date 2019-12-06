<template>
  <div>
    <textarea id="t" type="text" v-model="msg"></textarea>
    <br>
    <input type="button" @click="run1" value="Run 1: 典型错误"/><br>
    <input type="button" @click="run2" value="Run 2: 典型解决方案"/><br>
    <input type="button" @click="run3" value="Run 3: let解决方案"/><br>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    run1 () {
      // 典型的闭包问题
      this.msg = ''
      for (var i = 0; i < 3; i++) {
        var f = () => {
          this.msg += '\n ' + i
        }
        setTimeout(f, i * 1000)
      }
      this.msg += '\n' + 'done'
    },
    run2 () {
      // 典型的解决方案；
      // 牢记：状态通过函数参数保存。例如 bind 函数的参数
      this.msg = ''
      for (var i = 0; i < 3; i++) {
        var f = (k) => {
          this.msg += '\n ' + k
        }
        setTimeout(f.bind(null, i), i * 1000)
      }
      this.msg += '\n' + 'done'
    },
    run3 () {
      // 新的解决方案：let 的作用域
      // 每次循环生成新的 i
      this.msg = ''
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          this.msg += '\n ' + i
        }, i * 1000)
      }
      this.msg += '\n' + 'done'
    }
  }
}
</script>

<style>
#t {
  width: 500px;
  height: 10em;
}
</style>
