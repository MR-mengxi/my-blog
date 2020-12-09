<template>
  <div class="register">
    <div class="container">
      <h2 id="register">注册</h2>
      <div class="regCont">
        <div class="userName">
          <p>
            <label for="user" class="userItem">用户名：</label>
            <input id="user" type="text" placeholder="请输入用户名" />
          </p>
        </div>
        <div class="passWord">
          <p>
            <label for="pass" class="userItem">密码：</label>
            <input id="pass" type="password" placeholder="请输入密码"/>
          </p>
        </div>
        <div class="regBut">
          <p>
            <button class="btn">注册</button>
          </p>
        </div>
        <div class="log">
          已有账号？点击<router-link to="/login">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/css/login/register.scss";
</style>