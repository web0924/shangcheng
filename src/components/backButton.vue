<template>
  <div>
    <div class="backBtn">
      <van-icon @click="back" name="arrow-left" color="#647289" size="2rem  "/>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      location.href=document.referrer
    }
  }
};
</script>

<style scoped>
.backBtn {
  width: 3.25rem;
  height: 3.25rem;
  background: rgba(226, 226, 226, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
