# bookkeeping

> A Vue.js project

## 一个纯记账本 代码供大家参考 自己用来记账

Build Setup

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


Vuex公共仓库存储 vant-Ui框架  

vantUi调用键盘组件的时候 控制键盘的显示与隐藏是show的值 与其他无关
在Vue中任何阶段的生命周期都获取不到$refs 可以用setTimeout异步 然后等dom彻底加载完成 获取的到数据（比如dom的宽高）
也可以使用vantUi组件的方法 show和hide 但是有时候有些坑 比如执行了几次 里面执行不生效了 目前暂时不解决 还是用ui组件的方法
引用本地的字体图标包 用{{}} v-text都无效 字体图标不会渲染 用v-html则生效 
2019-1-15 今天把页面构建完成了 保存功能待测试 页面写的有点慢 vue用的有点生疏
2019-1-16 点击个几次弹出键盘就会出现问题  最终还是选择不用UI组件原来的hide方法 给最大的父元素设置了一个点击事件 隐藏掉键盘 当然还是少不了要设置一个无延时的定时器 等主线程的代码都执行完毕了 在这些这一段 最小限度的确保了bug的出现  
如果有幸看到我的这些代码 如果有可以优化的地方欢迎指正 我的wx是:w2458344297
踩到一个坑 由于我的隐藏按钮事件是放在整个页面 由于设置异步延时 则会在下一个页面找不到这个元素  经过几次测试 切换 最终给Ui组件的Tab设置了事件
                    