<template>
  <div>
    <h1 @click="test">API</h1>
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
  methods:{
    test(){
      this.$axios.get("getBanner").then((res) => {
        res = res.data
        console.log(res)
      }).catch((err) => {
        console.log(err)
      });
    },
    back(){
      location.href='http://test.chezhuzhilian.com/chatindex'
    }
  }
}
</script>

<style>

</style>