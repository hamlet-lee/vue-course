<!--
先安装 @vue/cli-service-global：
   cnpm install -g @vue/cli-service-global
启动：
   vue serve src/lesson2/basic/for.vue
-->
<template>
  <div>
    <div v-for="(a, idx) in list" v-bind:key="idx">
      * {{a}}
    </div>
    <hr/>
    <div v-for="(a, idx) in list" v-bind:key="idx">
      <!-- 这里不能直接写 v-model="a",
      否则v-model不知道x是list的第idx个元素，
      造成无法实现 视图 -> 模型 更新
       -->
      * <input v-model="list[idx]">
    </div>
    两个列表都绑定到了data的“list”成员
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['第一个', '第二个', '第三个']
    }
  }
}
</script>

<style>

</style>
