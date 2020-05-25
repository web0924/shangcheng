<template>
  <div>
    <div class="navBar">
      <back-button />
      <h1 class="topbarTxt">{{ topbarTxt }}</h1>
      <span></span>
    </div>
    <span class="line_20px"></span>
  </div>
</template>

<script>
import backButton from "@/components/backButton";

export default {
  components: {
    backButton
  },
  props: {
    topbarTxt: {
      type: String,
      default: "导航栏"
    },
    topbarTxtRight: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/common.scss";
.navBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.875rem;
  position: sticky;
  top: 0;
  .topbarTxt {
    font-size: 2.25rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(100, 114, 137, 1);
  }
}
</style>
