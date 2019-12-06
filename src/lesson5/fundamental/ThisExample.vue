<template>
  <div>
    <input type="text" v-model="msg"/><br>
    总结：<br>
    1. 把this看作一个参数<br>
    2. 默认为 global 或 undefined
    <input type="button" @click="run2" value="Run 2 (报错)"/><br>
    3. a.b () 调用时会指定 this = a
    <input type="button" @click="run1" value="Run 1"/><br>
    4. 箭头函数会继承 this
    <input type="button" @click="run6" value="Run 6 (报错)"/>
    <input type="button" @click="run7" value="Run 7"/><br>
    5. call, apply 可以临时指定 this
    <input type="button" @click="run3" value="Run 3"/>
    <input type="button" @click="run4" value="Run 4"/><br>
    6. bind 可以生成一个wrapper function绑住this
    <input type="button" @click="run5" value="Run 5"/><br>
  </div>
</template>

<script>

let A = {
  x: 1,
  f: function () {
    return this.x
  }
}

let B = {
  x: 2
}

let C = {
  x: 3,
  f1: function () {
    let k = function () {
      return this.x
    }
    return k()
  },
  f2: function () {
    let k = () => {
      return this.x
    }
    return k()
  }
}

export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    run1 () {
      // x.y形式，会隐式的指定this
      // 相当于： A.f ( this = A)
      this.msg = A.f()
    },
    run2 () {
      // this 被隐式指定为 window 或 undefined
      // 相当于 g( this = undefiend 或  this = window)
      let g = A.f
      this.msg = g()
    },
    run3 () {
      // 用call强制指定this
      // 相当于  A.f( this = B)
      this.msg = A.f.call(B)
    },
    run4 () {
      // 用apply强制指定this
      // 相当于  A.f( this = B)
      this.msg = A.f.apply(B)
    },
    run5 () {
      // 用bind预先指定this
      // 相当于 A.f (this = B)
      let h = A.f.bind(B)
      this.msg = h()
    },
    run6 () {
      // 不用箭头函数，内层函数的this会改变
      // 报错
      this.msg = C.f1()
    },
    run7 () {
      // 用箭头函数，内层函数的this不会改变
      // 正常
      this.msg = C.f2()
    }
  }
}
</script>

<style>

</style>
