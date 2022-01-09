

<template>
  <div class="my-hello">
    <div class="title"><h1>pxToRem，龙哥哥</h1></div>
    <div class="banners">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in slides" :key="index">
          <img :src="item" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="content">
      <span class="content-title">推荐功能</span>
      <div class="content-items">
        <div class="item" v-for="(item, index) in contentItems" :key="index">
          <img :src="item.imgSrc" />
          <span>{{item.tips}}</span>
        </div>
      </div>
    </div>
    <div class="content2">
      <div class="content-items">
        <div class="item1">
          <span class="item-title">云查询</span>
          <span class="item-tips">货代、报关工具</span>
        </div>
        <div class="item2">
          <span class="item-title">双十二来袭</span>
          <span class="item-tips">省省省！！！超实惠！</span>
        </div>
      </div>
    </div>
    <div class="ad">
      <div class="head">
        <img src="../assets/lb.png">
        公告
      </div>
      <div class="my-ad-content">
        <img src="../assets/gg.png">
        <div class="contentFont">
          <span>通关再提速！深圳海关“两步申报”
          改革实现海陆空口岸全覆盖。</span>
          <span class="date">10-28 18:00</span>
        </div>
      </div>
    </div>
    <div class="ad">
      <div class="head">
        <img src="../assets/wz.png">
        公告
      </div>
      <div class="my-ad-content">
        <img src="../assets/zx.png">
        <div class="contentFont">
          <span>通关再提速！深圳海关“两步申报”
改革实现海陆空口岸全覆盖云报...</span>
          <span class="date">10-28 18:00</span>
        </div>
      </div>
    </div>
    <div class="tabbar">
      <div class="tabbar-item">
        <img src="../assets/5.png">
        <span>云报关</span>
      </div>
      <div class="tabbar-item">
        <img src="../assets/6.png">
        <span>查编码</span>
      </div>
      <div class="tabbar-item">
        <img src="../assets/7.png">
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import 'swiper/css';  
 import slideImg from '../assets/banner.png'
 import item1 from '../assets/1.png'
 import item2 from '../assets/2.png'
 import item3 from '../assets/3.png'
 import item4 from '../assets/4.png'
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const slides = new Array(3).fill(slideImg)
      const contentItems = [{imgSrc:item1,tips:'查编码'},{imgSrc:item2,tips:'异常查询'},{imgSrc:item3,tips:'报关数据'},{imgSrc:item4,tips:'海关编码'}]
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        slides,
        contentItems
      };
    },
  };
</script>

<style scope lang="less">
.title{
  height: 64px;
  h1{
    font-size: 18px;
    font-weight: bold;
    color: #141414;
    text-align:center;
    line-height:64px;
  }
}
.banners{
  img{
    width:100%;
  }
}
.content{
  margin-top:20px;
  width: 375px;
  height: 134px;
  padding:8px 16px;
  box-sizing:border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.14);
  .content-title{
    font-size: 16px;
    font-weight: bold;
    color: #141414;
    display: inherit;
  }
  .content-items{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:10px;
  }
  .item{
    width: 74px;
    height: 74px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display:flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 42px;
      height: 42px;
      margin-top:5px;
    }
    span{
      font-size: 14px;
      font-weight:bold;
      color:#fff;
    }
    &:nth-of-type(1){
      background: rgba(80, 171, 255, 1);
    }
    &:nth-of-type(2){
      background: rgba(255, 114, 97, 1);
    }
    &:nth-of-type(3){
      background: rgba(121, 103, 255, 1);
    }
    &:nth-of-type(4){
      background: rgba(255, 164, 94, 1);
    }
  }
}
.content2{
  width: 375px;
  background: rgba(255, 255, 255, 0.39);
  margin:10px 0;
  padding:0 12px;
  box-sizing:border-box;
  .content-items{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .item-title{
      font-size: 17px;
      color: #FFFFFF;
      font-weight: bold;
      display:block;
    }
    .item-tips{
      font-size: 14px;
      font-weight: bold;
      color: #FFFFFF;
    }
    .item1{
      width: 173px;
      height: 89px;
      padding:13px 14px;
      background:url('../assets/bg.png')  no-repeat;
      background-size:100% 100%;
    }
    .item2{
      width: 173px;
      height: 89px;
      padding:13px 14px;
      background:url('../assets/bg1.png')  no-repeat;
      background-size:100% 100%;
      .item-title{
        color: #FFFF00;
        text-shadow: 2px 2px 0px rgba(7, 7, 7, 0.3);
      }
    }
  }
}
.ad{
  width: 375px;
  height: 125px;
  background: rgba(255, 255, 255, 0.39);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.14);
  margin-top:10px;
  .head{
    height: 30px;
    font-size: 12px;
    color: #5E5E5E;
    font-weight: bold;
    line-height: 30px;
    padding-left:16px;
    border-bottom:1px solid #EFEFEF;
    img{
      margin-right:5px;
      width:12px;
      height:11px;
    }
  }
  .my-ad-content{
    width: 375px;
    height: 95px;
    padding: 0 16px;
    margin-top:10px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    img{
      width:110px;
      height:75px;
    }
    .contentFont{
      margin-left:20px;
      font-size: 14px;
      font-weight: bold;
    }
    .date{
      margin-top:20px;
      font-size: 12px;
      color: #5E5E5E;
      display:block;
      text-align:right;
    }
  }
}
.tabbar{
  padding:3px 0 5px 0;
  position:fixed;
  bottom:0;
  display:flex;
  align-items:center;
  justify-content:space-around;
  width:100%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.14);
  background:#fff;
  .tabbar-item{
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
      width:30px;
      height:30px;
    }
    span{
      color:#6B6B6B;
      font-weight: bold;
      font-size: 12px;
    }
    &:nth-of-type(2){
      span{
        color:#4CA1F2;
      }
    }
  }
}
</style>
