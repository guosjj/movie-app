<script setup>
  import { provide,ref } from 'vue';
  const baseURL = ref("http://www.softeem.xin:9999");
  provide("baseURL",baseURL);
</script>

<template>
    <!-- 这个地方应该是根据路由模块来决定显示什么 -->
    <router-view></router-view>
</template>

<style>
@import url("https://at.alicdn.com/t/font_3453813_cnnb1gpc03o.css");
/* lang="scss" 
 $primaryColor:#f03d37; */
* {
  margin: 0;
  padding: 0;
  /* 取消移动端点击高亮 */
  -webkit-tap-highlight-color: transparent;
}

#app {
  /* vw全称viewport width */
  width: 100vw;
  height: 100vh;
}


</style>
