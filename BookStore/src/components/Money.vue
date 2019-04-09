<template>
  <div class="box">
      <h3>{{title}}</h3>
      <p>{{money}} <span>{{unit}}</span></p>
  </div>
</template>
<script>

export default {
  name: "Monye",
  data: function() {
    return {
      
    };
  },
  props:{
    title:String,
    money:Number,
    unit:String,
  },
};
</script>
<style scoped>
.box {
    width: 200px;
    height: 100px;
    /* border: 1px solid #999; */
    padding: 20px;
    border-radius: 10px;
    background: aquamarine;
}
.box h3 {
    font-size: 30px;
    color: #fff;
}
.box p {
    font-size: 35px;
    font-weight: bold;
    color: #fff;
    margin-top: 15px;
}
.box p span {
    color: #fff;
    font-size: 18px;
}
</style>