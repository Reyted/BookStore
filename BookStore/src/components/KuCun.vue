<template>
  <router-link to="/details">
  	<div class="box">
	      <div class="name" :style="mystyleTop">{{className}}</div>
	      <div class="num" :style="mystyleBom">{{num}}</div>
	      <div class="unit" :style="mystyleBom">单位(册)</div>
	  </div>
  </router-link>
</template>
<script>

import '../../static/animate.css'

export default {
  name: "KuCun",
  props:{
    className:String,
    num:Number,
    mystyleTop:Object,
    mystyleBom:Object,
  },
  methods:{
  	enter:function(){
  		
  	}
  }
};
</script>
<style scoped>
.box {
    width: 100px;
    height: 110px;

    animation:  flipInY 1s;
    /* border: 1px solid #999; */
}
.box .name {
    height: 30px;
    background: #46A1D8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    /* font-weight: bold; */
    color: #fff;
}
.box .num {
    height: 60px;
    background: #65AEDA;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
    font-size: 25px;
}
.box .unit {
    height: 20px;
    background: #65AEDA;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 12px;
    padding-bottom: 5px;
    box-sizing: border-box;
}

</style>