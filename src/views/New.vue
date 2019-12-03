<template>
  <div>
    <h1>新增</h1>

    姓名<input v-model="name"/><br/>
    电话<input v-model="tel"/><br/>
    <!-- 换用iview 控件 -->
    <!-- <input type="button" value="提交" @click="submit"/> -->
    <Button @click="submit">提交</Button>
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
        // 换用iview组件
        // alert('新增成功!')
        this.$Modal.success({
          title: '消息',
          content: '新增成功!',
          onOk: () => {
            this.name = ''
            this.tel = ''
          }
        })
      }).catch((err) => {
        // 换用iview组件
        // alert('失败：' + err)
        this.$Modal.error({
          title: '消息',
          content: '失败：' + err,
          onOk: () => {
            this.name = ''
            this.tel = ''
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
