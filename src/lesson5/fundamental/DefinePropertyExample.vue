<template>
  <div>
    <input type="button" @click="getX" value="Get X (注意console输出)"/><br>
    <input type="button" @click="setX" value="Set X (注意console输出)"/><br>
  </div>
</template>

<script>
let A = {
  _x: 5
}

// 用defineProperty可以截获get和set动作
Object.defineProperty(A, 'x', {
  get () {
    let a = this._x
    console.log(new Date() + ': x 正在被读取 读到 ' + a) // eslint-disable-line
    return a
  },
  set (val) {
    console.log(new Date() + ': x 正在被设置为 ' + val) // eslint-disable-line
    this._x = val
  }
})

export default {
  methods: {
    getX () {
      // this.msg = A.x
      let s = A.x // eslint-disable-line
    },
    setX () {
      A.x = Math.random() * 100
    }
  }
}
</script>

<style>

</style>
