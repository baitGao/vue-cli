<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>{{a}}</h3>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "小鱼仙官🐟(测试页)",
      a:""
    };
  },
  mounted(){
    console.log(this.$route.query.id)
    this.a=this.$route.query.id
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
