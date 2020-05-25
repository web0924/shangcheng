<template>
  <div>
    <nav-bar :topbarTxt="topbarTxt" />
    <!-- 列表内容 -->
    <ul class="goodsContent">
      <li class="goodsContentItem">
        <div class="goodsContentItem-imgBox"><img src="" /></div>
        <div class="goodsContentItem-details">
          <p class="goodsContentItem-details-title">巴拉巴拉小魔仙半合成机油</p>
          <button class="goodsContentItem-details-btn1">5w-40</button>
          <div class="goodsContentItem-details-span">
            <span>120万+条评论</span><span>好评98%</span>
          </div>
          <div class="goodsContentItem-details-price">
            <div class="goodsContentItem-details-price-left">
              <span>￥69</span><del>￥89</del>
              <p>已尊享9.2折</p>
            </div>
            <!-- <button class="toBuy">抢购</button> -->
            <van-button round type="info">抢购</van-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
export default {
  components: {
    navBar
  },
  data() {
    return {
      topbarTxt: "爆款推荐"
    };
  }
};
</script>

<style lang="scss" scoped>
.goodsContent {
  padding: 1.875rem;
  border-bottom: 1px solid #f5f5f5;
}
.goodsContentItem {
  display: flex;
  .goodsContentItem-imgBox {
    width: 13.75rem;
    height: 13.75rem;
    border: 1px solid red;
    img {
      width: 13.75rem;
      height: 13.75rem;
      border-radius: 1.25rem;
    }
  }
  .goodsContentItem-details {
    margin-left: 1.25rem;
    flex: 1;
    .goodsContentItem-details-title {
      font-size: 1.75rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .goodsContentItem-details-btn1 {
      background: rgba(220, 233, 253, 1);
      border-radius: 1.25rem;
      padding: 0 1.25rem;
      font-size: 1.5rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(50, 125, 250, 1);
      margin-top: 1.25rem;
    }
    .goodsContentItem-details-span {
      margin-top: 1.25rem;
      font-size: 1.5rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
    .goodsContentItem-details-span > span {
      display: inline-block;
      border: 1px solid #e2e2e2;
      margin-right: 1.25rem;
      border-radius: 0.3125rem;
      padding: 0 0.625rem;
    }
    .goodsContentItem-details-price {
      margin-top: 1.4375rem;
      display: flex;
      justify-content: space-between;
    }
    .goodsContentItem-details-price-left {
      span {
        font-size: 1.625rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(253, 71, 80, 1);
        line-height: 2;
      }
      del {
        font-size: 1.5rem;
        font-family: PingFang SC;
        font-weight: 400;
        text-decoration: line-through;
        color: rgba(153, 153, 153, 1);
        line-height: 2;
        margin-left: 0.625rem;
      }
      p {
        font-size: 1.5rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(254, 198, 53, 1);
        line-height: 2;
      }
    }
    .toBuy {
      width: 6.75rem;
      height: 3.125rem;
      display: inline-block;
      background: rgba(50, 125, 250, 1);
      border-radius: 1.5625rem;
    //   padding: 1.6875rem 1.6875rem;
      font-size: 1.75rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 2;
    }
  }
}
</style>
