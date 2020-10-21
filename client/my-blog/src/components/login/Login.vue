<template>
  <div class="login">
    <div class="container">
      <h2 id="login">登录</h2>
      <div class="logCont">
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
        <div class="logBut">
          <p>
            <button class="btn">登录</button>
          </p>
        </div>
        <div class="reg">
          还没有账号？点击<router-link to="/register">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/css/login/login.scss";
</style>