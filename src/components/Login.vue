<template>
  <el-form class="loginForm"
           :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
           label-width="100px">
    <h3>系统登录</h3>
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
    <div class="save">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <button @click="$router.push('/signup')">注册</button>
    </div>
    <el-button type="primary"
               style="width: 80%;position: absolute; right: 20px;"
               @click="submitForm">登录</el-button>
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
    submitForm (el) {
      let user = JSON.parse(sessionStorage.getItem('user'));
      if (user) {
        if (this.ruleForm.userName === user.username && this.ruleForm.password === user.password) {
          this.$router.push({ path: '/' });
        } else {
          this.$message({
            showClose: true,
            message: '用户名或密码错误，请重新输入！',
            type: 'error'
          })
        }
      } else {
        this.$message({
          showClose: true,
          message: '请注册后使用！',
          type: 'error'
        })
      }
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

