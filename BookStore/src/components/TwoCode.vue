<template>
    <div class="box">
        <img :src="twoCodeUrl" alt="">
        <p>店铺二维码</p>
    </div>
</template>
<script>
export default {
    name:"TwoCode",
    data:function(){
        return {
            twoCodeUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=435669883,502826530&fm=26&gp=0.jpg",

        }
    }
}
</script>
<style scoped>
.box {
    width: 70px;
    height: 100px;

    animation:  fadeIn 2s;
}
.box img {
    width: 70px;
    height: 70px;
    /* border-radius: 50%; */
}
.box p {
    font-size: 12px;
    text-align: center;
    line-height: 30px;
}
</style>


