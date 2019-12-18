<template>
  <div class="home">
    <div class="header"></div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <router-link to="/home/main">主页</router-link>
      <router-link to="/home/option">菜单</router-link>
      <router-link to="/home/list">订单</router-link>
      <router-link to="/home/cart">购物车</router-link>
      <router-link to="/home/mine">我的</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  created() {
    this.$store.dispatch("getList");
  },
  components: {}
};
</script>
