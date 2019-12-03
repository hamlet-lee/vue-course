<template>
  <div class="home">
    你好{{ name }}, 欢迎使用通讯本！
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState(['name'])
  }
}
</script>
