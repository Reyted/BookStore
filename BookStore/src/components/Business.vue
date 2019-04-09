<template>
  <div class="box">
    <div class="money-box">
      <h3>营业状况</h3>
      <div class="money">
        <my-money
          v-for="(item,index) in moneyArray"
          :key="index"
          :title="item.title"
          :money="item.money"
          :unit="item.unit"
          :style="item.background"
        ></my-money>
        <my-twocode></my-twocode>
      </div>
    </div>
    <div class="bookclass-box">
      <h3>分类库存</h3>
      <div class="bookclass">
        <my-kucun
          v-for="(item,index) in bookclassArray"
          :key="index"
          :className="item.className"
          :num="item.num"
          :mystyleTop="item.backgroundTop"
          :mystyleBom="item.backgroundBom"
        ></my-kucun>
      </div>
    </div>
  </div>
</template>
<script>
import Money from "./Money";
import KuCun from "./KuCun";
import TwoCode from "./TwoCode";
export default {
  name: "Business",
  components: {
    "my-money": Money,
    "my-kucun": KuCun,
    "my-twocode": TwoCode
  },
  mounted: function() {
      /**
       * 发送ajax获取
       */




    /**
     * 让营业额和订单量里面的数据跑起来   动画效果
     */
    var num0 = this.moneyArray[0].money;
    this.moneyArray[0].money = 0;

    var num1 = this.moneyArray[1].money;
    this.moneyArray[1].money = 0;

    var num2 = this.moneyArray[2].money;
    this.moneyArray[2].money = 0;

    var mytime0 = setInterval(() => {
      // console.log(this.moneyArray[0].money)
      this.moneyArray[0].money+=11
      if(this.moneyArray[0].money>=num0){
        clearInterval(mytime0)
        this.moneyArray[0].money=num0
      }
    }, 10);
    var mytime1 = setInterval(() => {
      // console.log(this.moneyArray[0].money)
      this.moneyArray[1].money+=1
      if(this.moneyArray[1].money>=num1){
        clearInterval(mytime1)
        this.moneyArray[1].money=num1
      }
    }, 10);
    var mytime2 = setInterval(() => {
      // console.log(this.moneyArray[0].money)
      this.moneyArray[2].money+=111
      if(this.moneyArray[2].money>=num2){
        clearInterval(mytime2)
        this.moneyArray[2].money=num2
      }
    }, 10);
  },
  data: function() {
    return {
      moneyArray: [
        {
          title: "今日营业额",
          money: 1024,
          unit:"￥",
          background: {
            background: "#4DA0FE"
          }
        },
        {
          title: "今日订单",
          money: 87,
          unit:"单",
          background: {
            background: "#3EDEBC"
          }
        },
        {
          title: "总营业额",
          money: 9999,
          unit:"￥",
          background: {
            background: "#FFBD60"
          }
        }
      ],

      bookclassArray: [
        {
          className: "童书",
          num: 120,
          backgroundTop: {
            background: "#1BAAA5"
          },
          backgroundBom: {
            background: "#43B5B1"
          }
        },
        {
          className: "小说",
          num: 154,
          backgroundTop: {
            background: "#FD684A"
          },
          backgroundBom: {
            background: "#F88068"
          }
        },
        {
          className: "文学",
          num: 452,
          backgroundTop: {
            background: "#46A1D8"
          },
          backgroundBom: {
            background: "#65AEDA"
          }
        },
        {
          className: "励志",
          num: 89,
          backgroundTop: {
            background: "#1CCF6B"
          },
          backgroundBom: {
            background: "#43D383"
          }
        },
        {
          className: "养生",
          num: 210,
          backgroundTop: {
            background: "#FCA65B"
          },
          backgroundBom: {
            background: "#F7B276"
          }
        },
        {
          className: "动漫",
          num: 58,
          backgroundTop: {
            background: "#1BAAA5"
          },
          backgroundBom: {
            background: "#43B5B1"
          }
        },
        {
          className: "时尚",
          num: 241,
          backgroundTop: {
            background: "#FD684A"
          },
          backgroundBom: {
            background: "#F88068"
          }
        },
        {
          className: "科普",
          num: 31,
          backgroundTop: {
            background: "#46A1D8"
          },
          backgroundBom: {
            background: "#65AEDA"
          }
        }
        
      ]
    };
  }
};
</script>
<style scoped>
.box {
  width: 1110px;
}
.box .money-box {
  background: #f5f7f9;
  padding: 20px;
}
.box .bookclass-box {
  background-color: #f5f7f9;
  padding: 20px;
  margin-top: 30px;
}
.box h3 {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
}
.box .money {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box .bookclass {
  display: flex;
  justify-content: space-between;
}
</style>