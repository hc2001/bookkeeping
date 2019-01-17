<template>
    <div class="container">
        <van-nav-bar
        right-text="纯记账"
        title="关于作者"
        left-arrow
        @click-left="goHome"
        />
        <van-panel title="关于作者">
            <div class="content">
                纯记账是我个人开发的一款应用，因为最近不怎么忙，界面是参照于一位安卓工程师，由于完全是我个人开发，所有数据
                格式都需要自己来弄(虽然数据目前也不多，也不是很复杂)，图也是自己切的，没有用Ps切图，太懒了...直接手动截图切了
                敷衍自己 <br>
                声明：本应用为纯绿色，无任何广告，目前只实现了简单的记账功能，功能会逐步完善，代码已经放到github，有兴趣的
                可以上去看看源码：<a href="https://github.com/hc2001/bookkeeping">源码地址</a>
            </div>
        </van-panel>
        <van-panel title="联系方式">
            QQ:2020010202（贼容易记）<br>
            微信:w2458344297 <br>
            欢迎小伙伴们交流技术。<br>
            end... 所有的东西我都在努力，不负将来，我要做的事情还有很多... 祝自己在即将到来的成年一切皆如我所愿 <br>
            2019-01-17 
        </van-panel>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        methods:{
            goHome(){
                this.$router.go(-1)
            }     
        }
    }
</script>
<style lang="less" scoped>
    .container {
        margin: 0;
        padding: 0;
        font-size: .28rem;
        font-weight: 700;
        padding: .2rem;
        .content {
            padding: .2rem;
        }
        a {
            color: #7BBDF7;
        }
    }
</style>