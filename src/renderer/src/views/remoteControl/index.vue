<script setup lang="ts"></script>

<template>
  <div class="content">
    <div class="nav">
      <router-link to="/home/remoteControl/deviceListConn"><span>设备列表</span></router-link>
      <router-link to="/home/remoteControl/manualConn"><span>手动连接</span><i></i></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.content {
  display: flex;
  flex-direction: column;
  padding-left: 25px;

  .nav {
    display: flex;
    padding: 10px;

    a {
      position: relative;
      align-items: center;
      background-color: transparent;
      margin: 0 10px;
      width: 80px;
      font-size: 18px;
      color: #555f87;
      z-index: 10;
      user-select: none;
      transition: color 0.2s;

      &.router-link-active {
        span {
          position: relative;
          z-index: 9;
          color: #000;
          font-size: 19px;
          font-weight: 700;
        }

        &::after {
          position: absolute;
          content: '';
          left: 2px;
          bottom: 2px;
          width: 90%;
          height: 5px;
          z-index: 8;
          background-image: linear-gradient(to right, #8ba0ff 10%, #fff 90%);
        }
      }

      &:hover {
        color: #000;
        font-size: 19px;
      }
    }
  }
}
</style>
