<script setup>
const minimize = () => {
  window.electron.ipcRenderer.send('min-app')
}
const close = () => {
  window.electron.ipcRenderer.send('close-app')
}
</script>

<template>
  <div class="home">
    <div class="window-bar">
      <div class="logo">CRCClient</div>
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
          <div class="name">张三</div>
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
  height: 6vh;
  display: flex;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 150px;
    height: 100%;
    border-right: 1px solid #9face656;
    -webkit-app-region: drag;
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
  height: 94vh;

  .left-zone {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 150px;
    border: 1px solid #9face656;
    border-top: none;

    .user {
      display: flex;
      padding-top: 40px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 28vh;

      .name {
        padding-top: 10px;
      }
    }

    .nav {
      display: flex;
      flex-direction: column;
      padding: 10px;
      padding-top: 30px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 43px;
        height: 43px;
        background-color: transparent;
        margin: 5px;
        border-radius: 15px;
        color: #555f87;
        user-select: none;

        &.router-link-active {
          background-color: #9face638;
          color: #5272ff;
        }

        &:hover {
          color: #5272ff;
        }

        span {
          padding-left: 3px;
        }
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
