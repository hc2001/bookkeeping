<template>
  <div class="container">
    <van-nav-bar title="纯记账" right-text="回到顶部" @click-right="goTop" right-arrow>
      <van-icon name="wap-nav" slot="left" @click="openLeft" />
    </van-nav-bar>
    <div class="panel clearfix">
      <div class="panel_top clearfix">
        <p>净资产</p>
        <div class="net_assets">{{totalMoney.netAssets}}</div>
      </div>
      <div class="panel_left clearfix">
        <div class="income">{{totalMoney.moneys}}</div>
        <p>本月收入</p>
      </div>
      <div class="panel_right clearfix">
        <div class="expenditure">{{totalMoney.pays}}</div>
        <p>本月支出</p>
      </div>
    </div>
    <div class="dataList clearfix" v-for="item in dataList" :key="item.id">
      <div class="data_top clearfix">
        <p class="left clearfix">日期：<span>{{item.date}}</span> </p>
        <div class="right clearfix">
          <div class="income_money">
            收：<span>{{item.income}}</span>
          </div>
          <div class="pay_money">
            支：<span>{{item.pay}}</span>
          </div>
        </div>
      </div>
      <div class="list clearfix" v-for="items in item.list" :key="items.name">
        <div class="list_left clearfix">
          <span class="iconfont" v-html="items.icon"></span>
        </div>
        <div class="list_center clearfix">
          <p class="name clearfix">{{items.name}}</p>
          <span class="note clearfix">{{items.note}}</span>
        </div>
        <div class="list_right clearfix">
          <div class="money clearfix">{{items.money}}</div>
        </div>
      </div>
    </div>
    <!-- 进入记账页面 -->
    <router-link to="/remember" tag="div" class="remember">
      <span>+</span>
    </router-link>
    <!-- 左侧弹出框 -->
    <van-popup v-model="show" position="left" :overlay="true" >
      <div class="popup" ref="popup">
        <div :class="item.selected?'current':'' " v-for="item in popupLeft" :key="item.id" @click="replace(item.id)">
          <router-link :to="item.link">{{item.name}}</router-link>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      dataList:[],   // 存放账本数据列表
      totalMoney:{}, // 存放总收入和总支出和净资产的对象
      show:false,
      popupLeft:[{
        id:1,
        name:'首页',
        link:'/home',
        selected:true
      },{
        id:2,
        name:'关于作者',
        link:'/home/about',
        selected:false
      }]
    }
  },
  created(){
    this.getDataList();
    this.getTotalMoney();
  },
  updated(){
    // 设置左侧侧边栏高度
    this.$refs.popup.style.height = document.documentElement.clientHeight + 'px'
  },
  methods:{
    getDataList(){
      this.dataList = this.$store.getters.dataLists
      // console.log(this.dataList);
    },
    getTotalMoney(){  // 本月支出 本月收入 净资产
      this.totalMoney = this.$store.getters.totalMoneys;
      // console.log(this.totalMoney);
    },
    goTop(){
      console.log('goTop');
    },
    openLeft(){
      this.show = !this.show
    },
    replace(id){
      this.popupLeft.forEach(item=>{
        if (item.id != id) {
          item.selected = false
        } else {
          item.selected = true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    /*1.样式重置*/
    html,body,ul,li,img,a,p,div,form,input,h3,h4,h5,button,header,del{
        padding: 0;
        margin: 0;
        /*设置盒模型*/
        box-sizing: border-box;
        /*去除移动端特有的点击高亮效果*/
        -webkit-tap-highlight-color: transparent;
    }
    // 字体图标
    @font-face {
        font-family: 'iconfont';
        src: url('../lib/icon/iconfont.eot');
        src: url('../lib/icon/iconfont.eot?#iefix') format('embedded-opentype'),
            url('../lib/icon/iconfont.woff2') format('woff2'),
            url('../lib/icon/iconfont.woff') format('woff'),
            url('../lib/icon/iconfont.ttf') format('truetype'),
            url('../lib/icon/iconfont.svg#iconfont') format('svg');
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: .8rem;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #79C3EE;
    }
    // 清除浮动
    .clearfix::before,
    .clearfix::after{
        content: "";
        display: block;
        height: 0;
        line-height: 0px;
        clear: both;
        visibility: hidden;
    }
    .container {
      width: 100%;
      font-size: .28rem;
      background-color: #fff;
      /* 总金额部分 */
      .panel {
        background-color: #2196F2;
        height: 3rem;
          .panel_top {
          text-align: center;
          > p {
            padding-top: .2rem;
            font-size: .36rem;
            color: #fff;
          }
          > .net_assets {
            padding-top: .08rem;
            color: #E36049
          }
        }
        .panel_left {
          float: left;
          width: 50%;
          text-align: center;
          padding-top: .4rem;
          > p {
            padding-top: .2rem;
            font-size: .32rem;
            color: #fff;
          }
          > .income {
            color: #49e356;
          }
        }
        .panel_right {
          float: left;
          width: 50%;
          text-align: center;
          padding-top: .4rem;
          > p {
            padding-top: .2rem;
            font-size: .32rem;
            color: #fff;
          }
          > .expenditure {
            color: #E36049;
          }
        }
      }
      /* 数据部分 */
      .dataList {
        font-size: .28rem;
        > .data_top {
          background-color: #7BBDF7;
          height: .5rem;
          line-height: .5rem;
          > .left {
            float: left;
            padding-left: .2rem;
          }
          > .right {
            float: right;
            padding-right: .2rem;
            > .income_money {
              float: left;
              padding-right: .2rem;
              color: #E36049;
            }
            > .pay_money {
              float: right;
              color: #397967;
            }
          }
        }
        > .list {
          background-color: #fff;
          height: 1rem;
          line-height: 1rem;
          > .list_left {
            float: left;
            padding-left: .1rem;
          }
          > .list_center {
              position: relative;
              float: left;
              height: 1rem;
              line-height: 1rem;
              padding-left: .2rem;
              padding-top: .1rem;
              > .name {
                height: .6rem;
                line-height: .6rem;
                font-size: .36rem;
                font-weight: 600;
                color: #000;
              }
              > .note {
                width: 4rem;
                position: absolute;
                top: .32rem;
                color: #0000007a;
                font-size: .32rem;
              }
            }
            > .list_right {
              float: right;
              padding-right: .2rem;
              font-size: .45rem;
              font-weight: 800;
            }
        }
      }
      /* 进入记账页面 */
      .remember {
        position: fixed;
        right: .4rem;
        bottom: 1.5rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: #a93f2c;
        > span {
          position: absolute;
          left: 28%;
          top: 5%;  
          color: #fff;
          font-size: .7rem;
        }
      }
      // 左侧弹出框
      .popup {
        width: 3rem;
        height: 100%;
        margin-top: .5rem;
        > div {
          height: 1rem;
          line-height: 1rem;
          margin-bottom: .2rem;
          padding-left: .2rem;
          font-size: .36rem;
          > a {
            color: #7BBDF7;
          }
        }
        > .current {
          background-color: #f0f0f0;
        }
      }
    }
    
</style>
