import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let dataList = JSON.parse(localStorage.getItem('dataLists') || '[]'); // 一进来就取本地的值
export default new Vuex.Store({
    state:{
        // dataList:[
        //     { id:1,date:"2019-01-11",income:20000,pay:9990,
        //     list:[{
        //         icon:'&#xe65b;',name:'买菜',note:'吃东西',money:999
        //     },{
        //         icon:'&#xe65b;',name:'吃饭',note:'啊哈哈',money:-888.92
        //     }]},
        //     { id:2,date:"2019-01-10",income:888,pay:222,
        //     list:[{
        //         icon:'&#xe65b;',name:'买',note:'牛逼',money:44
        //     },{
        //         icon:'&#xe65b;',name:'呀',note:'嘻嘻',money:32
        //     }]},
        //     { id:3,date:"2019-01-09",income:888,pay:222,
        //     list:[{
        //         icon:'&#xe65b;',name:'买',note:'牛逼',money:44
        //     },{
        //         icon:'&#xe65b;',name:'呀',note:'嘻嘻',money:322
        //     }]}]
        dataList,
    },
    mutations:{
        addDataList(state,data){
            let len = state.dataList.length - 1,  // 列表数据最后一条的索引
                dataList = state.dataList[len];  // 最后一条数据
            
            // 因为没有做时间选择 只需要比对最后一条数据 前面几天的数据完全没有可能是同一天 也无循环的必要
            if (!dataList) {  // 无数据的时候为空 取反进来
                state.dataList.push(data);                
            } else if (dataList.date == data.date) {
                dataList.list.unshift({icon:data.list[0].icon,name:data.list[0].name,note:data.list[0].note,money:data.list[0].money});
            } else {
                state.dataList.unshift(data);
            }
            
            console.log(state.dataList);
            localStorage.setItem('dataLists',JSON.stringify(state.dataList));
        }
    },
    getters:{
        dataLists(state){  // 计算收支 总金额 返回出去计算好的
            state.dataList.forEach(item=>{
                let moneys = 0,
                    pays = 0;
                item.list.some(items=>{
                    if (items.money > 0) {
                        moneys += parseInt(items.money)
                    } else {
                        pays += parseInt(items.money)
                    }
                    items.money = items.money.toString().includes('.') ? items.money : items.money + '.00'
                })
                item.income = moneys.toString().includes('.') ? moneys : moneys+'.00'  // 每日收入
                item.pay = pays.toString().includes('.') ? pays : pays+'.00'  // 每日支出
            })
            localStorage.setItem('dataLists',JSON.stringify(state.dataList));  // 存到本地缓存
            return JSON.parse(localStorage.getItem('dataLists') || '[]')  // 直接取本地缓存的值 手动刷新之后getters计算会出错
        },
        totalMoneys(state){  // 本月收入 本月支出 净资产
            let moneys = 0, // 本月收入
                pays = 0;   // 本月支出
            state.dataList.forEach(item=>{
                item.list.forEach(items=>{
                    if (items.money > 0) {
                        moneys += parseInt(items.money)
                    } else {
                        pays += parseInt(items.money)
                    }
                })
            })
            let netAssets = moneys + pays // 净资产
            moneys = moneys.toString().includes('.') ? moneys : moneys + '.00';
            pays = pays.toString().includes('.') ? pays : pays + '.00';
            netAssets = netAssets.toString().includes('.') ? netAssets : netAssets + '.00';
            localStorage.setItem('totalMoney',JSON.stringify({moneys,pays,netAssets}))
            return JSON.parse(localStorage.getItem('totalMoney') || '[]')
        }
    }
})