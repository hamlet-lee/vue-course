<!--
启动方式：见 HelloUser.vue
 -->
<template>
  <div>
    内部：你好 <b>{{name}}</b> !
  </div>
</template>

<script>
export default {
  props: {
    'name': String
  }
}
</script>

<style>

</style>
