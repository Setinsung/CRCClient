<script setup lang="ts">
import { useRouter } from 'vue-router'
import useStore from '../../store'
import { ref } from 'vue'
const router = useRouter()
const userInfoModelVisible = ref(false)

const { userStore } = useStore()
const minimize = () => {
  window.api.minApp()
}
const close = () => {
  window.api.closeApp()
}

const onGoToLogin = () => {
  if (userStore.userName !== '') {
    userInfoModelVisible.value = true
  } else {
    router.push({
      path: '/login'
    })
  }
}
const onGoToWebSite = () => {
  window.api.openExternalUrl('https://baidu.com')
}
const onLogout = () => {
  userStore.userName = ''
  userInfoModelVisible.value = false
  router.push({
    path: '/login'
  })
}
</script>

<template>
  <div class="home">
    <div class="window-bar">
      <div class="logo">
        <img class="logo-ico" src="../../assets/images/icon.png" alt="" />
        <img class="logo-font" src="../../assets/images/icon_font.png" alt="" />
      </div>
      <div class="window-ctls">
        <div class="blank-place"></div>
        <div class="btn-group">
          <button @click="minimize">
            <icon-minus size="16" />
          </button>
          <button @click="close">
            <icon-close size="16" />
          </button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="left-zone">
        <div class="user" @click="onGoToLogin">
          <a-avatar :size="64" :style="{ backgroundColor: '#3370ff' }">
            <icon-user />
          </a-avatar>
          <div class="name">{{ userStore.userName == '' ? '立即登录' : userStore.userName }}</div>
        </div>
        <a-modal
          v-model:visible="userInfoModelVisible"
          class="user-info-model"
          title="个人信息"
          title-align="start"
          :footer="false"
          width="380px"
        >
          <span :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
            <a-avatar :style="{ marginRight: '8px', backgroundColor: '#165DFF' }" :size="28">
              A
            </a-avatar>
            <a-typography-text>{{ userStore.userName }}</a-typography-text>
          </span>
          <a-descriptions
            :column="2"
            style="margin-top: 20px"
            :data="[
              {
                label: '手机：',
                value: ''
              },
              {
                label: '邮箱：',
                value: ''
              },
              {
                label: '设备数量：',
                value: '2/100'
              }
            ]"
          />
          <div class="user-info-model-ops">
            <div class="user-info-model-website" @click="onGoToWebSite">个人中心</div>
            <div class="user-info-model-logout" @click="onLogout">退出登录</div>
          </div>
        </a-modal>
        <div class="nav">
          <router-link ondragstart="return false" to="/home/remoteControl">
            <icon-computer size="22" />
            <span>远程连接</span>
          </router-link>
          <router-link to="/home/settings">
            <icon-settings size="22" />
            <span>参数设置</span>
          </router-link>
          <div class="background-animation"></div>
        </div>
        <!-- <div class="connect-state">
          <icon-sync size="16" spin />
          <span>正在连接服务器...</span>
        </div> -->
      </div>
      <router-view class="right-zone"></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  background-image: linear-gradient(to bottom left, #74ebd522 0%, #fff 80%, #9face636 100%);
}

.window-bar {
  height: 7vh;
  display: flex;
  justify-content: space-between;

  .logo {
    padding-top: 5px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 150px;
    height: 100%;
    border-right: 1px solid #9face656;
    -webkit-app-region: drag;

    .logo-ico {
      height: 30px;
    }

    .logo-font {
      height: 20px;
      padding-left: 2px;
      padding-bottom: 5px;
    }
  }

  .window-ctls {
    display: flex;
    flex: 1;
    background-color: #fff;

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
        width: 45px;
        background-color: transparent;

        &:hover {
          background-color: #e0e0e063;
        }
      }
    }
  }
}

.content {
  display: flex;
  width: 100vw;
  height: 93vh;

  .left-zone {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 150px;
    border: 1px solid #9face656;
    border-top: none;

    .user {
      display: flex;
      margin-top: 40px;
      margin-bottom: 20px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 24vh;
      user-select: none;
      cursor: pointer;

      .name {
        padding-top: 10px;
      }
    }

    .nav {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 10px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 43px;
        width: 118.67px;
        height: 48px;
        background-color: transparent;
        margin: 0 5px;
        border-radius: 15px;
        color: #555f87;
        z-index: 10;
        user-select: none;
        transition: color 0.3s;

        &.router-link-active {
          color: #5272ff;
        }

        &:hover {
          color: #5272ff;
        }

        &:nth-child(1):hover ~ .background-animation {
          top: 11px;
        }

        &:nth-child(2):hover ~ .background-animation {
          top: 60px;
        }

        &:nth-child(3):hover ~ .background-animation {
          top: 108px;
        }

        &:nth-child(1).router-link-active ~ .background-animation {
          top: 11px;
        }

        &:nth-child(2).router-link-active ~ .background-animation {
          top: 60px;
        }

        &:nth-child(3).router-link-active ~ .background-animation {
          top: 108px;
        }

        span {
          padding-left: 3px;
        }
      }

      .background-animation {
        position: absolute;
        top: 11px;
        left: 15px;
        width: 118.67px;
        height: 43px;
        background-color: #9face638;
        border-radius: 15px;
        z-index: 9;
        transition: all 0.25s;
      }
    }

    .connect-state {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #555f87;
      padding: 10px 0 15px 15px;
      bottom: 0;
      user-select: none;

      .arco-icon-sync {
        color: #5272ff;
      }
    }
  }

  .right-zone {
    flex: 1;
    height: 100%;
    border-left: none;
    background-color: #fff;
  }
}

.user-info-model {
  .user-info-model-ops {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;

    div {
      height: 30px;
      width: 160px;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;

      &:hover {
        background-color: #eee;
      }

      &.user-info-model-website {
        position: relative;
        color: #3491fa;

        &::after {
          position: absolute;
          right: -10px;
          top: 0;
          content: '';
          width: 1.5px;
          height: 30px;
          background-color: #ddd;
        }
      }

      &.user-info-model-logout {
        color: red;
      }
    }
  }
}
</style>
