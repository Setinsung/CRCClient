<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import useStore from '../../store'

const router = useRouter()
const { userStore } = useStore()

window.api.resizeLoginWindow()

const loginBtnDisabled = ref(true)
const loginForm = reactive({
  userName: '张三',
  password: '',
  isRead: false
})

watch(loginForm, (newValue) => {
  if (newValue.userName !== '' && newValue.password !== '' && newValue.isRead) {
    loginBtnDisabled.value = false
  } else {
    loginBtnDisabled.value = true
  }
})
const minimize = () => {
  window.api.minApp()
}
const close = () => {
  window.api.resizeCommonWindow()
  router.go(-1)
}
const onLogin = () => {
  userStore.userName = loginForm.userName
  window.api.resizeCommonWindow()
  router.push({
    path: '/home'
  })
}
</script>

<template>
  <div class="content">
    <div class="window-ctls">
      <div class="blank-place"></div>
      <div class="btn-group">
        <button @click="minimize">
          <icon-minus size="12" />
        </button>
        <button @click="close">
          <icon-close size="12" />
        </button>
      </div>
    </div>
    <div class="login-form">
      <div class="logo">
        <img class="logo-ico" src="../../assets/images/icon.png" alt="" />
        <img class="logo-font" src="../../assets/images/icon_font.png" alt="" />
      </div>
      <a-input
        v-model="loginForm.userName"
        :size="'large'"
        class="item-input"
        placeholder="请输入用户名"
        allow-clear
      />
      <a-input-password
        v-model="loginForm.password"
        :size="'large'"
        class="item-input"
        placeholder="请输入密码"
        allow-clear
      />
      <a-checkbox v-model="loginForm.isRead" class="checkbox-input">
        已阅读并同意服务协议
      </a-checkbox>
      <a-button :disabled="loginBtnDisabled" class="link_btn" type="primary" @click="onLogin">
        <span>登录</span>
      </a-button>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(-55deg, #e73c7e3f 25%, #23a5d560 40%, #23d5ab2e 65%, #fff 75%);
  background-size: 600% 600%;
  animation: gradientBG 10s ease-in-out infinite;

  .login-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      top: 40px;
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      margin-top: 35px;

      .logo-ico {
        width: 60px;
      }

      .logo-font {
        width: 60px;
      }
    }

    .item-input {
      width: 260px;
      height: 43px;
      margin-bottom: 15px;
      border-radius: 5px;
      background-color: #fff;
    }
    .checkbox-input {
      width: 260px;
      margin-bottom: 15px;
      font-size: 12px;
    }

    .link_btn {
      align-items: center;
      width: 260px;
      height: 37px;
      font-size: 12px;
      border-radius: 5px;

      span {
        padding-left: 5px;
        font-size: larger;
      }
    }
  }
}

.window-ctls {
  display: flex;
  height: 26px;
  background-color: transparent;

  .blank-place {
    flex: 1;
    -webkit-app-region: drag;
  }

  .btn-group {
    height: 100%;

    button {
      align-items: center;
      border: 0;
      outline: none;
      height: 100%;
      width: 26px;
      background-color: transparent;

      &:hover {
        background-color: #e0e0e063;
      }
    }
  }
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
