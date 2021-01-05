<template>
  <div class="login">
    <!-- <div :class="{ layer: layer }"></div> -->
    <div class="loginCont">
      <div class="msg">
        <h2>Please Login</h2>
      </div>
      <div class="login-input">
        <p>
          <input type="text" v-model="userName" placeholder="Name" />
        </p>
        <p>
          <input type="password" v-model="passWord" placeholder="Password" />
        </p>
      </div>
      <div class="login-btn">
        <button class="btn" @click="login">sign in</button>
        <span class="register" @click="isCreate">sign up</span>
      </div>
    </div>
    <div class="phrase">黑夜中的影子相比于人要正直的多...</div>

    <div class="register" v-if="isShow">
      <div class="registerCont">
        <div class="msg">
          <h2>Please Register</h2>
        </div>
        <div class="login-input">
          <p>
            <input type="text" v-model="create.userName" placeholder="Name" />
          </p>
          <p>
            <input
              type="password"
              v-model="create.password"
              placeholder="Password"
            />
          </p>
          <p>
            <input
              type="password"
              v-model="create.passwords"
              placeholder="Repeat Password"
            />
          </p>
        </div>
        <div class="login-btn">
          <button class="btn" @click="register">sign up</button>
        </div>
        <span @click="isCreate" class="el-icon-circle-close"></span>
      </div>
    </div>
    <div class="alert" ref="alert">
      <span class="el-icon-circle-close"></span>
      请填写完整信息
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginTitle: "Login",

      userName: "",
      passWord: "",

      create: {},
      isShow: false,
      isAlert: false,
    };
  },
  methods: {
    isCreate() {
      // if (this.isShow) {
      //   this.isShow = false;
      // } else {
      //   this.isShow = true;
      // }
      // 这两个功能是一样的
      return (this.isShow = !this.isShow);
    },
    async login() {
      const user = await this.$store.dispatch("login", {
        loginId: this.userName,
        loginPwd: this.passWord,
      });
      if (user) {
        this.$router.push("/");
      } else {
        alert("账号密码错误");
      }
    },
    register() {
      if (Object.keys(this.create).length != 3) {
        this.$refs.alert.style.top = 20 + "px";
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #475164;
  overflow: hidden;
  .loginCont,
  .registerCont {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 2px 10px #e6e6e6;
    box-sizing: border-box;
    background: #fff;
    text-align: center;
    padding: 40px 0 24px;
    transition: all 2s;
    .msg {
      h2 {
        font-size: 22px;
        font-weight: 400;
        color: #0b9aff;
        box-sizing: border-box;
        margin: 10px 0 24px;
      }
    }
    .login-input {
      padding: 0 40px;
      p {
        padding: 0;
        margin: 0;
        input {
          width: 100%;
          height: 44px;
          border: 1px solid #eee;
          border-radius: 4px;
          box-sizing: border-box;
          color: #606060;
          outline: none;
          font-size: 14px;
          margin-bottom: 12px;
          padding: 0 12px;
          transition: all 0.3s;
          &:hover {
            border: 1px solid #0b9aff;
          }
        }
      }
    }
    .login-btn {
      padding: 0 40px;
      .btn {
        display: block;
        width: 100%;
        height: 40px;
        border: none;
        color: #fff;
        background: #0b9aff;
        border-radius: 4px;
        outline: none;
        font-size: 16px;
        letter-spacing: 1px;
        margin: 10px 0 0;
        text-transform: uppercase;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          background: #0486e2;
        }
      }
      span {
        display: block;
        font-size: 12px;
        color: #ccc;
        margin-top: 6px;
        text-transform: uppercase;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          color: #0486e2;
        }
      }
    }
  }
  .phrase {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    color: #fff;
    font-size: 12px;
    text-align: center;
    letter-spacing: 1px;
    z-index: 99;
  }
  .register {
    .registerCont {
      width: 440px;
      height: 350px;
      .el-icon-circle-close {
        position: absolute;
        right: 14px;
        top: 14px;
        color: #ccc;
        &:hover {
          color: #0b9aff;
          cursor: pointer;
        }
      }
    }
  }
  .alert {
    position: absolute;
    left: 0;
    right: 0;
    top: -58px;
    width: 300px;
    height: 38px;
    line-height: 30px;
    border: 1px solid;
    border-radius: 8px;
    box-sizing: border-box;
    color: #f56c6c;
    font-size: 14px;
    text-align: left;
    background: #fef0f0;
    margin: 20px auto;
    padding: 4px 0 0 10px;
    transition: all 0.5s;
  }
}
</style>