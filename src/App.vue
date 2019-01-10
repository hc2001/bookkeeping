<template>
  <div id="app">
    <van-nav-bar title="纯记账" right-text="回到顶部" @click-right="goTop" right-arrow>
      <van-icon name="wap-nav" slot="left" @click="openLeft" />
    </van-nav-bar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg:'aaa'
    }
  },
  methods:{
    goTop(){
      console.log('goTop');
    },
    openLeft(){
      console.log('openLeft');
    }
  }
}
</script>

<style>

</style>
