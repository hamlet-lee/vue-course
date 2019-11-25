<!--
启动方式：见 RaterUser.vue
 -->
<template>
  <div>
    {{ comment }}
    评分：
    <input type="button" value="3" @click="fire(3)"/>
    <input type="button" value="2" @click="fire(2)"/>
    <input type="button" value="1" @click="fire(1)"/>
  </div>
</template>

<script>
export default {
  props: {
    comment: String
  },
  methods: {
    fire: function (val) {
      this.$emit('rate', val)
    }
  }
}
</script>

<style>

</style>
