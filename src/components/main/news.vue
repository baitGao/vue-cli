<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/news/item_1">国际星闻🦄</router-link>
    <router-link to="/news/item_2">国内星闻🐉</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "小鱼仙官🐟(新闻页)"
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
