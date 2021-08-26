<template>
  <div id="app">
    <div class="nav">
      <ms-nav msg="@/components/nav.vue"></ms-nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "app",
  components: {
    msNav: Nav,
  },
};
</script>

<style lang="less">
// 字体设置
@font-face {
    font-family: miaowu;
    src: url("./assets/typeface/FZMiaoWu.TTF");
}
#app{
  font-family: miaowu;
}
// 去除滚动条
::-webkit-scrollbar {
     width: 0 !important;
}
</style>
