<template>
    <div style="padding:0;">
        <el-container>
            <el-header>书籍添加</el-header>
            <el-main>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="书名">
                                <el-input v-model="bookname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="作者">
                                <el-input v-model="author"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="出版社">
                                <el-input v-model="press"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="主海报">
                                <el-input v-model="mainurl"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="小海报">
                                <el-input v-model="smurlo"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="小海报">
                                <el-input v-model="smurlt"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="现价">
                                <el-input v-model="price"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="原价">
                                <el-input v-model="oldprice"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="出版时间">
                                <el-date-picker type="date" placeholder="选择日期" v-model="presstime" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="添加数量">
                                <el-input type="number" v-model="num"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="书籍类别">
                                <el-select v-model="cid" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="是否打折">
                                <el-radio v-model="discount" label="0">打折</el-radio>
                                <el-radio v-model="discount" label="1">不打折</el-radio>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="书籍简介">
                        <el-input type="textarea" v-model="introd"></el-input>
                    </el-form-item>
                    <el-form-item label="详细介绍">
                        <el-input type="textarea" v-model="introduce"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即添加</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import $ from "jquery"
export default {
    name:"AddGoods",
    data() {
      return {
          form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        options: [{
          value: '1',
          label: '童书'
        }, {
          value: '2',
          label: '小说'
        }, {
          value: '3',
          label: '文学'
        }, {
          value: '4',
          label: '励志'
        }, {
          value: '5',
          label: '养生'
        },
        {
          value: '6',
          label: '动漫'
        }, {
          value: '7',
          label: '时尚'
        }, {
          value: '8',
          label: '科普'
        }],
        value: '',
        bookname:'',
        author:'',
        press:'',
        presstime:'',
        mainurl:'',
        smurlo:'',
        smurlt:'',
        price:0,
        oldprice:0,
        cid:"",
        discount:"0",
        introd:'',
        introduce:'',
        num:1
      };
    },
    methods:{
        onSubmit:function(){
            let that=this;
            function formatFunc(str) {
            return str > 9 ? str : '0' + str
            };
            var date2 = new Date(this.presstime);
            var year = date2.getFullYear();
            var mon = formatFunc(date2.getMonth() + 1);
            var day = formatFunc(date2.getDate());
            var dateStr = year+'-'+mon+'-'+day;
            $.ajax({
                type:"post",
                url:"http://localhost:7778/insert",
                contentType: 'application/x-www-form-urlencoded;charset=utf-8',  
                dataType:"json",
                data:{
                    bookname:that.bookname,author:that.author,press:that.press,presstime:dateStr,mainurl:that.mainurl,smurlo:that.smurlo,smurlt:that.smurlt,
                    price:that.price,oldprice:that.oldprice,cid:that.cid,discount:that.discount,introd:that.introd,introduce:that.introduce,num:that.num
                },
                success:function(data){
                    console.log(data)
                }
            })
        }
    }
}
</script>
<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        margin-bottom:50px;
    }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>


