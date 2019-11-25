<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/custom/RaterUser.vue
-->
<template>
  <div>
    <Rater :comment="comment1" @rate="onRated"/>
    {{msg}}
  </div>
</template>

<script>
import Rater from './Rater'
export default {
  components: {
    Rater
  },
  data () {
    return {
      comment1: '飞牛之下三千尺',
      msg: ''
    }
  },
  methods: {
    onRated: function (val) {
      this.msg = `打了${val}分!`
    }
  }
}
</script>

<style>

</style>
