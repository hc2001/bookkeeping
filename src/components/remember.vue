<template>
    <div class="container">
        <!-- NavBar -->
        <van-nav-bar
        right-text="再记一笔"
        title="纯记账"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <van-tabs v-model="active" id="tab">
            <van-tab title="收支">
                <div class="jizhang">
                    <span class="type" ref="type">其他</span>
                    <input type="number" placeholder="0.00" class="money" v-model="money" @click="show=true"/>
                </div>
                <div class="icon">
                    <div class="icon_list" v-for="item in list" :key="item.id" @click="checked(item.id)">
                        <img src="../lib/images/checked.png" v-show="item.checked">
                        <span class="iconfont" v-html="item.icon"></span>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <div class="select" ref="select">
                    <span class="shouzhi" @click="shouOrZhi">{{shouzhi | sz}}</span>
                    <span class="pay_type" @click="payTypes">{{payType | pay_type}}</span>
                    <span class="date">{{date}}</span>
                    <input type="text" placeholder="写备注" class="note" v-model="note"/>
                </div>
                <van-number-keyboard
                :show="show"
                theme="custom"
                extra-key="."
                close-button-text="完成"
                @blur="show = false"
                @input="onInput"
                @delete="onDelete"
                @show="showKeyboard"
                @hide="hideKeyBoard"
                ref="keyboard"
                />
            </van-tab>
            <van-tab title="转账">内容 2</van-tab>
        </van-tabs>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                active:0,  // 默认展示哪个tab 从0开始
                show:true, // 默认一进来显示键盘
                money:'',  // 存放输入的金额
                keyBoardHeight:0,  // 存放键盘的高度
                shouzhi:1, // 支出或者收入
                payType:1, // 现金 || 支付宝 || 微信
                date: new Date(), // 时间
                note:'', // 备注 绑定到input
                list:[
                    {id:1, name:'其他', icon:'&#xe65b;', checked:true},
                    {id:2, name:'吃喝饮食', icon:'&#xe6c7;', checked:false},
                    {id:3, name:'基金理财', icon:'&#xe61c;', checked:false},
                    {id:4, name:'健身', icon:'&#xe5dc;', checked:false},
                    {id:5, name:'欠债借贷', icon:'&#xe61d;', checked:false},
                    {id:6, name:'社交红包', icon:'&#xe502;', checked:false},
                    {id:7, name:'房租水电', icon:'&#xe682;', checked:false},
                    {id:8, name:'工资薪水', icon:'&#xe68d;', checked:false},
                    {id:9, name:'日常用品', icon:'&#xe76a;', checked:false},
                    {id:10, name:'旅游旅行', icon:'&#xe764;', checked:false},
                    {id:11, name:'通讯费用', icon:'&#xe6ca;', checked:false},
                    {id:12, name:'交通出行', icon:'&#xe628;', checked:false},
                    {id:13, name:'医疗费用', icon:'&#xe669;', checked:false},
                    {id:14, name:'人情来往', icon:'&#xf0076;', checked:false},
                    {id:15, name:'逛街购物', icon:'&#xe6a0;', checked:false}
                ]
            }
        },
        created(){
            this.date = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`
        },
        mounted(){
            setTimeout(()=>{
                // 等dom彻底创建完成了 防止刚进来定位设置不成功
                this.keyBoardHeight = this.$refs.keyboard.$el.clientHeight; // 键盘的高度
                console.log(this.keyBoardHeight);
                this.$refs.select.style.bottom = this.keyBoardHeight+'px'
            },1)
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            },
            onClickRight(){
                let id =  this.$store.state.dataList.length + 1;
                let icon = '';
                this.list.some(item=>{
                    if(item.checked){
                        icon = item.icon
                        return true
                    }
                })
                if(this.shouzhi == 1){  // 支出
                    this.money = `-${this.money}`
                } else {
                    this.money = this.money
                }
                console.log(icon);
                let addBill = {
                    id,
                    date:this.date,
                    income:0,
                    pay:0,
                    icon,
                    name:this.$refs.type.innerText,
                    note:this.note,
                    money:this.money
                }
                console.log(addBill);
            },
            onInput(value){
                console.log(value);
                this.money += value;
            },
            onDelete() {
                this.money = this.money.substring(0,this.money.length - 1);
            },
            showKeyboard(){
                this.keyBoardHeight = this.$refs.keyboard.$el.clientHeight; // 键盘的高度
                this.$refs.select.style.bottom = this.keyBoardHeight+'px'
            },
            hideKeyBoard(){ 
                this.$refs.select.style.bottom = '0px'
            },
            shouOrZhi(){
                if(this.shouzhi == 1){
                    this.shouzhi = 2
                } else {
                    this.shouzhi = 1
                }
            },
            payTypes(){
                if(this.payType == 1){
                    this.payType = 2 
                } else if(this.payType == 2) {
                    this.payType = 3
                } else if(this.payType == 3) {
                    this.payType = 1
                }
            },
            checked(id){
                this.list.some(item=>{
                    if(item.id != id){ // 如果不是当前点击的元素 则把选中状态改变
                        item.checked = false
                    } else { // 当前元素设置为选中状态
                        item.checked = true;
                        this.$refs.type.innerText = item.name
                    }
                })
            }
        },
        watch:{
            
        }
    }
</script>
<style lang="less" scoped>
    /*1.样式重置*/
    html,body,ul,li,img,a,p,div,form,input,h3,h4,h5,button,header,del{
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
        position: relative;
        font-size: .32rem;
        > #tab {
            font-size: .36rem;
            font-weight: 700;
            .jizhang {
                height: 1rem;
                width: 100%;
                background-color: #79C3EE;
                padding-left: .2rem;
            }
            .type {
                float: left;
                font-size: .48rem;
                font-weight: 500;
                line-height: 1rem;
                text-align: center;
            }
            .money {
                float: right;
                outline: none;
                border: 0px;
                background-color: #79C3EE;
                width: 1.4rem;
                line-height: .9rem;
                color: transparent;
                text-shadow: 0 0 0 #000;
            }
        }
        .select {
            border: 1px solid #eee;
            height: 1rem;
            width: 100%;
            font-size: .32rem;
            color: #555555;
            padding: 0 .2rem 0 .2rem;
            position: fixed;
            left: 0;
            bottom: 0;
            > span {
                padding-top: .2rem;
                float: left;
                border: 1px solid #EB91B6;
                border-radius: 50%;
                height: .6rem;
                text-align: center;
                margin-left: .2rem;
                margin-top: .06rem;
            }
            > span:nth-of-type(1) {
                width: .8rem;
            }
            > span:nth-of-type(2) {
                width: 1.2rem;
            }
            > span:nth-of-type(3) {
                width: 2.2rem;
                border-radius: 25%;
            }
            > .note {
                width: 1.6rem;
                height: .9rem;
                text-align: center;
                border-radius: 35%;
                float: right;
                outline: none;
                border: 1px solid #EB91B6;
                color: transparent; /* 光标隐藏 */
                text-shadow: 0 0 0 #000; /* 光标隐藏 */
                margin-top: .06rem;
            }
        }
        .icon {
            width: 100%;
            > .icon_list {
                position: relative;
                float: left;
                width: 20%;
                text-align: center;
                > .iconfont {
                    display: block;
                    height: .8rem;
                    padding-top: .1rem;
                }
                > p {
                    margin: 0;
                    padding-top: .08rem;
                    font-size: .28rem;
                    font-weight: 200;
                }
                > img {
                    position: absolute;
                    top: .1rem;
                    right: .3rem;
                    width: .5rem;
                }
            }
        }
    }
</style>