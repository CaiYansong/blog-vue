<template>
  <el-container>
    <el-header class="header">
      <div class="header-wrap">
        <router-link class="logo" to="/">
          <img class="logo-icon" :src="logoIcon" />
        </router-link>
        <div class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/article-list">Articles</router-link>
          <router-link to="/lp">LP</router-link>
          <router-link to="/note">Note</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </el-header>
    <el-main class="main">
      <router-view />
    </el-main>
    <el-footer class="footer">
      <div class="footer-info">© 2021 蔡延松</div>
      <a href="http://www.beian.miit.gov.cn/" target="_blank"
        >浙ICP备19046722号</a
      >
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      logoIcon: require("@/assets/dog_128px.png"),
    };
  },
});
</script>

<style lang="less">
@import url("./app.less");
</style>
