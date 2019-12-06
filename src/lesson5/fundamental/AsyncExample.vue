<template>
  <div>
    <textarea v-model="msg1"/><br>
    <input type="button" @click="runComplicated" value="123循环 - 传统的方式"/><br>
    <textarea v-model="msg2"/><br>
    <input type="button" @click="runAsyncAwait" value="123循环 - async/await方式"/><br>
    <textarea v-model="msg3"/><br>
    <input type="button" @click="runSequence" value="连续异步任务 - async/await方式"/><br>
  </div>
</template>

<script>
let myWait = (millis) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, millis)
  })
}

let adder = (a, b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b)
    }, 1000)
  })
}

export default {
  data () {
    return {
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  methods: {
    runComplicated () {
      // 复杂方式
      this.msg1 = ''
      var idx = 0
      setInterval(() => {
        idx++
        if (idx > 3) {
          idx = 1
        }
        this.msg1 += ' ' + idx
      }, 1000)
      this.msg1 += '\n' + 'done'
    },
    async runAsyncAwait () {
      // async await 方式
      // 可以拿到babel去看看被怎么翻译了
      // https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=IYZwngdgxgBAZgV2gFwJYHsIwE5IILjR4DuwqyMAFAJQwDeAUDMywPSsyiSzCnkyBO00Dw-kxbN2MQPfKgU7lA_0aAGJQBGwRQFMANoG7lQNDu2wNURgOANAEnKBv_0CL0YDC5UWOQALVCAB0AWxABzAEwwAvDADkftYsxPbqqlTIuKq0jGJicOjYVGEUqD4wAIwA3DBpADy-AMw5qADUpTFBcZx8FM5gAOpkyJQZAAwd1FVxdg4u7l6lvn7-MKW53cwAvt0zYlNAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Ces2016%2Ces2017%2Creact%2Cstage-2&prettier=false&targets=&version=7.7.4&externalPlugins=
      this.msg2 = ''
      while (true) {
        // 看似死循环，实际上在await交出执行权
        for (let i = 1; i <= 3; i++) {
          await myWait(1000)
          this.msg2 += ' ' + i
        }
      }
    },
    async runSequence () {
      // await有返回值，对应的是resolve的参数
      this.msg3 = 'start'

      let x = await adder(1, 2)
      this.msg3 += ` x=${x}`

      let y = await adder(x, 3)
      this.msg3 += ` y=${y}`
      this.msg3 += ` end`
    }
  }
}
</script>

<style>

</style>
