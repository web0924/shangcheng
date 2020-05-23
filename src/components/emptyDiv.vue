<template>
  <div>
    <div  :style="{ height: emptyDiv }"></div>
  </div>
</template>

<script>
export default {
  props: {
   emptyDiv: {
      type: String,
    }
  }
};
</script>

<style></style>
