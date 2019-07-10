<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link :to="{path:'/test',query:{id:'升官发财'}}">toTest</router-link>
    <button v-on:click="test">测试</button>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      msg: "小鱼仙官🐟(信息页)"
    };
  },
 methods:{
    test(){
    console.log("发财")
    this.$router.push({path:'/test',query:{id:'聚宝盆'}})
  }
 }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
