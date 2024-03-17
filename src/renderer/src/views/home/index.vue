<script setup lang="ts">
const minimize = () => {
  window.api.minApp()
}
const close = () => {
  window.api.closeApp()
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
        <div class="user">
          <a-avatar :size="64" :style="{ backgroundColor: '#3370ff' }">
            <icon-user />
          </a-avatar>
          <div class="name">立即登录</div>
        </div>
        <div class="nav">
          <router-link ondragstart="return false" to="/home/remoteControl">
            <icon-computer size="22" />
            <span>远程连接</span>
          </router-link>
          <router-link to="/home/deviceList">
            <icon-sort size="22" />
            <span>设备列表</span>
          </router-link>
          <router-link to="/home/settings">
            <icon-settings size="22" />
            <span>参数设置</span>
          </router-link>
          <div class="background-animation"></div>
        </div>
        <div class="connect-state">
          <icon-sync size="16" spin />
          <span>正在连接服务器...</span>
        </div>
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
</style>
