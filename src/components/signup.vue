<template>
  <el-form class="loginForm"
           :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
           label-width="100px">
    <h3>注册</h3>
    <el-form-item label="用户名:"
                  prop="userName">
      <el-input v-model="ruleForm.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码:"
                  prop="password">
      <el-input type="password"
                autocomplete="off"
                v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-button type="primary"
               style="width: 80%;position: absolute; right: 20px;"
               @click="signupForm">注册</el-button>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        userName: '',
        password: ''
      },
      checked: true,
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    signupForm (el) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          var loginParams = { username: this.ruleForm.userName, password: this.ruleForm.password };
          sessionStorage.setItem('user', JSON.stringify(loginParams));
          this.$router.push({ path: '/login' });
        } else {
          this.$message({
            showClose: true,
            message: '请输入用户名或密码！',
            type: 'error'
          })
          return false;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.loginForm {
  width: 400px;
  height: 340px;
  padding-right: 20px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  h3 {
    color: #4b4949;
    height: 100px;
    line-height: 100px;
  }
  el-input {
    width: 80%;
  }
  .save {
    margin-bottom: 10px;
    margin-left: -200px;
  }
}
</style>

