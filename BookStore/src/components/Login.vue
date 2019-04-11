<template>
	<div class="container">
		<h2 class="header">欢迎来到后台管理系统</h2>
		<div class="content">
			<p class="title">管理员登录</p>
			<div class="box">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
					<el-form-item prop="pass">
						<el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入账号"></el-input>
					</el-form-item>
					<el-form-item prop="checkPass">
						<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm()">登录</el-button>
						<el-button @click="resetForm('ruleForm2')">重置</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		background-image: url('../assets/img/back.jpg');
		background-size: cover;
		border-top: 1px solid transparent;
	}
	
	.content {
		width: 300px;
		height: 300px;
		background: rgba(0, 0, 0, 0.2);
		margin: 50px auto;
		border-radius: 10px;
	}
	
	.header {
		text-align: center;
		margin-top: 150px;
		font-size: 30px;
	}
	
	.title {
		color: white;
		font-size: 14px;
		text-align: center;
		height: 50px;
		line-height: 50px;
		border-bottom: 2px solid white;
	}
	
	.box {
		width: 100%;
		height: 248px;
		padding:50px 20px ;
		box-sizing: border-box;
	}
	.el-form-item__content{
		margin-left: 0!important;
		display: flex;
		justify-content: center;
	}
</style>