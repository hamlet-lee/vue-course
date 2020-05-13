<template>
  <div class="home">
    您好！欢迎使用 Presto Gateway 规则编辑器
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
