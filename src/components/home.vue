<template>
  <div class="container">
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
          <van-icon :name="items.icon" size="1rem" />
        </div>
        <div class="list_center clearfix">
            <p class="name clearfix">{{items.name}}</p>
            <span class="remarks clearfix">{{items.remarks}}</span>
          </div>
        <div class="list_right clearfix">
          <div class="money clearfix">{{items.money}}</div>
        </div>
      </div>
    </div>
    
    <!-- <div class="dataList clearfix">
      <div class="data_top clearfix">
        <p class="left clearfix">日期：<span>2019-01-10</span> </p>
        <div class="right clearfix">
          <div class="income_momey">
            收：<span>20000.00</span>
          </div>
          <div class="pay_money">
            支：<span>1000.00</span>
          </div>
        </div>
      </div>
      <div class="list clearfix">
        <div class="list_left clearfix">
          <van-icon name="alipay" size="1rem" />
        </div>
        <div class="list_center clearfix">
            <p class="name clearfix">其他</p>
            <span class="remarks clearfix">外卖</span>
          </div>
        <div class="list_right clearfix">
          <div class="money clearfix">-188.00</div>
        </div>
      </div>
      
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      dataList:[],   // 存放账本数据列表
      totalMoney:{}, // 存放总收入和总支出和净资产的对象
    }
  },
  created(){
    this.getDataList();
    this.getTotalMoney();
  },
  methods:{
    getDataList(){
      this.dataList = this.$store.getters.dataLists
      // console.log(this.dataList);
    },
    getTotalMoney(){  // 本月支出 本月收入 净资产
      this.totalMoney = this.$store.getters.totalMoneys;
      console.log(this.totalMoney);
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
              color: #397967  ;
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
              > .remarks {
                width: 4rem;
                position: absolute;
                top: .24rem;
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
    }
    
</style>
