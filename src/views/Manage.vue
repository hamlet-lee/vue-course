<template>
  <div>
    <h1>管理</h1>
    <!-- 使用自定义组件 -->
    <v-action id="action"></v-action>
  </div>
</template>

<script>
// 导入自定义组件
import action from '../components/Action'

export default {
  // 局部注册自定义 action 组件
  components: {
    'v-action': action,
  },
}
</script>

<style>
#action {
  width: 1200px;
  margin: 20px 10%;
}
</style>
