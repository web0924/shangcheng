<template>
  <div>
    <header>
      <form class="form_search" action="/">
        <span class="form_search_city">{{city}}</span>
        <van-search
          shape="round"
          background="#E8B98E"
          v-model="search_value"
          placeholder="搜索商品"
          @search="onSearch"
          @cancel="onCancel"
          @focus="onFocus"
        />
      </form>
    </header>
    <!-- banner图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 金刚区 -->
    <van-row type="flex" justify="center">
      <van-col span="6">
        <img src />
        <span>爆款推荐</span>
      </van-col>
      <van-col span="6">
        <img src />
        <span>限时特惠</span>
      </van-col>
      <van-col span="6">
        <img src />
        <span>汽车用品</span>
      </van-col>
      <van-col span="6">
        <img src />
        <span>车主生活</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      search_value: "", //商品搜索
      city: "郑州", //城市
      images: [
        //banner图
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
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
  .form_search {
    @include fj();
    align-items: center;
  }
  .form_search_city {
    font-size: 1.75rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 2;
    margin-left: 0.94rem;
  }
  .van-search {
    flex: 1;
  }
  .van-search__content {
    background-color: #eecaa9;
  }
}
// banner
.van-swipe {
  width: 90%;
  height: 18.75rem;
  margin:-10.5rem auto 0;
  border-radius: 1.25rem;
  border: 1px solid greenyellow;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0 auto;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 1.25rem;
  text-align: center;
  background-color: #39a9ed;
}
// 金刚区
.van-row--justify-center {
  text-align: center;
  margin-top: 3.13rem;
  font-size: 1.5rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 2;
}
</style>