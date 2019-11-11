<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="我是Hamlet，今天开始学习前端工程化！" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import { test1 } from "@/test";

export default {
  name: "home",

  components: {
    HelloWorld
  }
};
</script>
