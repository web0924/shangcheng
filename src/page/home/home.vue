<template>
  <div>
    <header>
      <form action="/">
        <van-search
          shape="round"
          background="#E8B98E"
          v-model="value"
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
          @focus="onFocus"
        />
      </form>
    </header>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    onFocus() {
      Toast("弹出搜索页面");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";
header {
  @include wh(100%, 19.81rem);
  background: rgba(232, 185, 142, 1);

  // .van-search {
  //   background-color: rgba(232, 185, 142, 1);
  // }
  // .van-search__content {
  //   border-radius: 1.88rem;
  //   background-color: #eecaa9;
  // }
}
</style>