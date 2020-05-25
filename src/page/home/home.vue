<template>
  <div>
    <header>
      <form class="form_search" action="/">
        <span class="form_search_city">{{ city }}</span>
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
      <van-col span="6" @click="toHotRecommended">
        <img class="four_img" src />
        <span>爆款推荐</span>
      </van-col>
      <van-col span="6">
        <img class="four_img" src />
        <span>限时特惠</span>
      </van-col>
      <van-col span="6">
        <img class="four_img" src />
        <span>汽车用品</span>
      </van-col>
      <van-col span="6">
        <img class="four_img" src />
        <span>车主生活</span>
      </van-col>
    </van-row>
    <!-- 头条 -->
    <div class="headlines">
      <div class="headlines_left">
        <span>头条</span>
        <i class="line_y"></i>
        <span class="headlines_left_val">{{ headlinesVal }}</span>
      </div>
      <div class="headlines_right">
        <span>去抢购></span>
      </div>
    </div>
    <!-- 每日更新 -->
    <div class="day_push">
      <div class="day_push_top">
        <span class="day_push_top_left">每日更新</span>
        <router-link class="day_push_top_right" to="">
          查看更多
        </router-link>
      </div>
      <div class="day_push_content">
        <div class="day_push_content_left">
          <div class="day_push_content_left_top">
            <span class="f30c3">发现好货</span>
            <button class="day_push_content_left_top_button">跟榜购物</button>
          </div>
          <p class="day_push_content_left_txt">车主小管家</p>
          <img class="day_push_content_left_img" src="" />
        </div>
        <div class="day_push_content_right">
          <div
            class="day_push_content_right_item"
            v-for="item in dayPushShop"
            :key="item.index"
          >
            <div class="day_push_content_right_item_moule">
              <p class="f30c3">{{ item.shop_title }}</p>
              <button class="day_push_content_right_item_btn">
                {{ item.shop_price }}
              </button>
            </div>
            <img class="day_push_content_right_item_img" :src="item.shop_img" />
          </div>
        </div>
      </div>
    </div>
    <!-- 车主精选 -->
    <div class="choiceness">
      <div class="choiceness_top">
        <div class="choiceness_top_left">
          <span class="choiceness_top_left_title">车主精选</span>
          <span class="choiceness_top_left_txt">只为懂你 精选良品</span>
        </div>
        <span class="more">查看更多</span>
      </div>
      <ul class="choiceness_shopBox">
        <li
          class="choiceness_shopBo_item"
          v-for="(item, index) in choiceness"
          :key="index"
        >
          <router-link :to="item.routerLink">
            <img :src="item.shopImg" alt="" />
            <div class="choiceness_shopBo_item_bot">
              <span class="choiceness_shopBo_item_title">{{
                item.shopName
              }}</span>
              <div class="choiceness_shopBo_item_price">
                <span>{{ item.shopPrice }}</span>
                <button
                  v-show="item.shopPost"
                  class="choiceness_shopBo_item_icon"
                >
                  包邮
                </button>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 底部导航 -->
    <ul class="footer" ref="footerH">
      <router-link to="">
        <li>
          <img src="" alt="" />
          <span>首页</span>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <img src="" alt="" />
          <span>首页</span>
        </li>
      </router-link>

      <router-link to="">
        <li>
          <img src="" alt="" />
          <span>首页</span>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <img src="" alt="" />
          <span>首页</span>
        </li>
      </router-link>
    </ul>
    >
    <!-- 空div -->
    <empty-div :emptyDiv="emptyDiv" />
  </div>
</template>

<script>
import { Toast } from "vant";
import emptyDiv from "../../components/emptyDiv";
export default {
  components: {
    emptyDiv
  },
  data() {
    return {
      search_value: "", //商品搜索
      city: "郑州", //城市
      images: [
        //banner图
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      headlinesVal: "巴拉巴拉小魔仙半合成机油", //滚动头条信息
      dayPushShop: [
        //每日更新商品
        {
          index: 1,
          shop_title: "拓力普 钳子",
          shop_price: "特价19.90",
          shop_img: "#"
        },
        {
          index: 2,
          shop_title: "拓力普 钳子",
          shop_price: "特价19.90",
          shop_img: "#"
        }
      ],
      // 精选商品
      choiceness: [
        {
          routerLink: "#",
          shopImg: "#",
          shopName: "超值玻璃水x2瓶",
          shopPrice: "￥15",
          shopPost: true
        },
        {
          routerLink: "#",
          shopImg: "#",
          shopName: "超值玻璃水x2瓶",
          shopPrice: "￥15",
          shopPost: true
        },
        {
          routerLink: "#",
          shopImg: "#",
          shopName: "超值玻璃水x2瓶",
          shopPrice: "￥15",
          shopPost: true
        }
      ],
      emptyDiv: null //空div
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
      // Toast("弹出搜索页面");
      this.$router.replace("/shopSearch");
    },
    // 路由跳转
    toHotRecommended() {
      this.$router.replace('/HotRecommended')
    }
  },
  mounted() {
    // 获取footer元素的高度
    this.emptyDiv = window.getComputedStyle(this.$refs.footerH).height;
    // console.log(this.emptyDiv);
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
  margin: -10.5rem auto 0;
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
  .four_img {
    width: auto;
    height: auto;
    max-width: 4.375rem;
    max-height: 4.375rem;
  }
}
// 头条
.headlines {
  width: 90%;
  height: 3.75rem;
  margin: 2.8125rem auto 0;
  background: rgba(245, 245, 245, 1);
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  .headlines_left {
    font-size: 1.625rem;
    color: #497df5;
    font-weight: bold;
  }
  .headlines_left_val {
    font-size: 1.625rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(153, 163, 178, 1);
    line-height: 2;
  }
  .line_y {
    display: inline-block;
    width: 0.125rem;
    height: 1.25rem;
    background: rgba(205, 210, 218, 1);
    margin: 0 1.25rem;
  }
  .headlines_right {
    font-size: 1.5rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(50, 125, 250, 1);
    line-height: 2;
  }
}
// 每日更新
.day_push {
  // width: 90%;
  margin: 2.5rem auto 0;
  margin-left: 1.875rem;
  margin-right: 1.875rem;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(231, 239, 252, 1);
  padding: 1.875rem;

  .day_push_top {
    @include fj();
    align-items: center;
    .day_push_top_left {
      font-size: 1.875rem;
      font-family: HuXiaoBo-NanShen;
      font-weight: 400;
      font-style: italic;
      color: rgba(50, 125, 250, 1);
      line-height: 2;
    }
    .day_push_top_right {
      font-size: 1.625rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(189, 189, 189, 1);
      line-height: 2;
    }
  }
  .day_push_content {
    margin-top: 1.875rem;
    display: flex;
    justify-content: space-between;
    .day_push_content_left,
    .day_push_content_right {
      width: 46%;
      height: 18.75rem;
      box-sizing: border-box;
    }
    .day_push_content_left {
      padding-top: 1rem;
      padding-left: 1.875rem;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(245, 245, 245, 1);
      box-shadow: 0px 0px 20px 0px rgba(231, 239, 252, 1);
      border-radius: 0.625rem;
      .day_push_content_left_top_button {
        font-size: 1.25rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(252, 144, 4, 1);
        line-height: 2;
        padding: 0 1.1875rem;
        border: 1px solid rgba(252, 144, 4, 1);
        border-radius: 1.125rem;
        background: white;
        margin-left: 0.9375rem;
      }
      .day_push_content_left_txt {
        font-size: 1.375rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(189, 189, 189, 1);
        line-height: 2;
      }
      .day_push_content_left_img {
        @include wh(7.625rem, 9.25rem);
        margin: 0 auto;
        display: block;
      }
    }
    .day_push_content_right {
      @include fj();
      flex-direction: column;
      align-items: center;
    }
    .day_push_content_right .day_push_content_right_item {
      width: 100%;
      // height: 47%;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(245, 245, 245, 1);
      box-shadow: 0px 0px 1.25rem 0px rgba(231, 239, 252, 1);
      border-radius: 0.625rem;
      display: flex;
      padding: 1.5rem 0 0.625rem 2.0625rem;
    }
    .day_push_content_right_item_btn {
      border: 1px solid rgba(255, 56, 56, 1);
      border-radius: 1.125rem;
      font-size: 1.25rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 56, 56, 1);
      padding: 0 1.25rem;
      background-color: white;
      line-height: 2;
    }
    .day_push_content_right_item_img {
      width: 6.3125rem;
      height: 6.0625rem;
      margin: 0.625rem 0 0 1rem;
    }
  }
  // font30 color#333333
  .f30c3 {
    font-size: 1.875rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 2;
  }
}
// 车主精选
.choiceness {
  margin: 2rem 1.875rem 0;
  box-shadow: 0px 0px 1.25rem 0px #e7effc;
  padding: 1.875rem;
  .choiceness_top {
    @include fj();
    align-items: center;
    .choiceness_top_left_title {
      font-size: 1.875rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .choiceness_top_left_txt {
      font-size: 1.625rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(189, 189, 189, 1);
      margin-left: 1.25rem;
    }
    .more {
      font-size: 1.625rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(189, 189, 189, 1);
    }
  }
  .choiceness_shopBox {
    @include fj();
    flex-wrap: wrap;
    a {
      width: 100%;
    }
    .choiceness_shopBo_item {
      width: 45%;
      margin-top: 2.5rem;
      border-radius: 10px;
      // overflow: hidden;
      .choiceness_shopBo_item_bot {
        padding-top: 1.875rem;
        box-shadow: 0px 0px 1.25rem 0px rgba(231, 239, 252, 1);
      }
      .choiceness_shopBo_item_title {
        font-size: 1.75rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 2;
        margin-left: 1.625rem;
      }
      .choiceness_shopBo_item_price {
        font-size: 2.5rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(253, 71, 80, 1);
        // line-height: 2;
        @include fj();
        padding: 0 1.25rem 1.5625rem 1.875rem;
      }
      .choiceness_shopBo_item_icon {
        display: inline-block;
        border-radius: 0.3125rem;
        border: 0.5px solid rgba(253, 71, 80, 1);
        font-size: 1.25rem;
        padding: 0 0.75rem;
        line-height: 2;
        background-color: white;
      }
      img {
        width: 100%;
        height: 15.1875rem;
        border: 1px solid;
        display: inline-block;
      }
    }
  }
}
.footer {
  @include fj();
  @include wh(100%, auto);
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
  padding: 0.875rem 3.125rem;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid rgba(226, 226, 226, 1);
  box-shadow: 0px 0.125rem 0.625rem 0px rgba(205, 205, 205, 1);
  img {
    @include wh(2.625rem, 2.625rem);
    border: 1px solid red;
    display: block;
    margin: 0 auto;
  }
  span {
    font-size: 1.375rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(46, 126, 254, 1);
    line-height: 2;
  }
}
</style>
