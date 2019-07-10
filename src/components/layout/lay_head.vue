<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link v-bind:to="item.path" v-for="(item,index) in routerList" v-bind:key="index">{{item.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "小鱼仙官🐟(头部)",
      routerList: [
        { path: "/info", name: "信息页" },
        { path: "/news", name: "新闻页" },
        { path: "/test", name: "测试页" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div>a{
  margin: 0 20px;
}
</style>
