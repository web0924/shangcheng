<template>
  <shengbei>
    <template v-slot:header>
      标题很长很长
    </template>
    <template v-slot:center>
      中间最先展示的内容区域
    </template>

    <template v-slot:left>
      左边的朋友
    </template>
    <template> </template>
  </shengbei>
</template>

<script>
import shengbei from "../components/shengbei";
export default {
  components: {
    shengbei
  }
};
</script>

<style>
</style>
