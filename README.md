# bookkeeping

> A Vue.js project

## 一个纯记账本 代码供大家参考 自己用来记账

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Vuex公共仓库存储 vant-Ui框架  

## vantUi调用键盘组件的时候 控制键盘的显示与隐藏是show的值 与其他无关
## 在Vue中任何阶段的生命周期都获取不到$refs 可以用setTimeout异步 然后等dom彻底加载完成 获取的到数据（比如dom的宽高）
## 也可以使用vantUi组件的方法 show和hide 但是有时候有些坑 比如执行了几次 里面执行不生效了 目前暂时不解决 还是用ui组件的方法
## 2019-1-15 今天把页面构建完成了 保存功能待测试 页面写的有点慢 vue用的有点生疏
