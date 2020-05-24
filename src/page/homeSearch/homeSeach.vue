<template>
  <div>
    <div class="topSearch">
      <back-button />
      <van-search
        v-model="searchVal"
        :placeholder="searchPlaceholder"
        autofocus
        show-action
        clearable
      />
    </div>
    <p class="line_20px"></p>
    <div class="content">
      <div class="recent">
        <h2 class="font30">最近搜索</h2>
        <van-icon name="delete" size="3rem" />
      </div>
      <div class="recentContent">
        <span class="font28btn" v-for="(item, index) in recent" :key="index">{{
          item
        }}</span>
      </div>
      <div class="recent">
        <h2 class="font30">历史搜索</h2>
        <van-icon name="delete" size="3rem" />
      </div>
      <div class="recentContent">
        <span
          class="font28btn"
          v-for="(item, index) in historySearch"
          :key="index"
          >{{ item }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import backButton from "@/components/backButton";
export default {
  components: {
    backButton
  },
  data() {
    return {
      searchVal: null, //搜索关键词
      searchPlaceholder: "洗车", //placehorder
      recent: ["玻璃水", "玻璃水", "玻璃水", "玻璃水", "玻璃水", "玻璃水"],
      historySearch: ["玻璃水", "玻璃水", "玻璃水", "玻璃水", "玻璃水", "玻璃水"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";
@import "../../style/common.scss";
.topSearch {
  @include fj();
  align-items: center;
  padding: 0 1.875rem;
  .van-search {
    flex: 1;
    margin-left: 1.875rem;
  }
}
.font30 {
  font-size: 1.875rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.font28btn {
  display: inline-block;
  font-size: 1.75rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  padding: 0 1.875rem;
  line-height: 2;
  background-color: #f5f5f5;
  border-radius: 1.75rem;
  margin-bottom: 1.875rem;
  margin-right: 1.25rem;
}
.content {
  background: rgba(255, 255, 255, 1);
  border-radius: 1.25rem;
  padding: 2.5rem 1.875rem;
  .recent {
    @include fj();
    align-items: center;
  }
  .recentContent {
    margin-top: 1.875rem;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
}
</style>
