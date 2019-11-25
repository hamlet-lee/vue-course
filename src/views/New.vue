<template>
  <div>
    <h1>新增</h1>

    姓名<input v-model="name"/><br/>
    电话<input v-model="tel"/><br/>
    <input type="button" value="提交" @click="submit"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      tel: ''
    }
  },
  methods: {
    submit () {
      // 演示调试手段
      // debugger // eslint-disable-line
      // let o = {a:{b:1, c:2}, d:'hello'}
      // console.log(o)

      // Promise
      axios.request({
        method: 'POST',
        url: '/api/new',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          name: this.name,
          tel: this.tel
        })
      }).then((res) => {
        // 200
        alert('新增成功!')
        this.name = ''
        this.tel = ''
      }).catch((err) => {
        alert('失败：' + err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
