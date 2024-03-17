<script setup lang="ts"></script>

<template>
  <div class="content">
    <div class="animation">
      <div class="loading">
        <div class="loading-square"></div>
        <div class="loading-square"></div>
        <div class="loading-square"></div>
        <div class="loading-square"></div>
      </div>
    </div>
    <div class="logo">
      <img class="logo-ico" src="../../assets/images/icon.png" alt="" />
      <img class="logo-font" src="../../assets/images/icon_font.png" alt="" />
    </div>
    <div class="tips">载入中<span class="dot">...</span></div>
  </div>
</template>

<style scoped lang="less">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  font-style: 30px;
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-image: linear-gradient(to bottom left, #74ebd522 0%, #fff 80%, #9face636 100%);

  .animation {
    top: -10px;
    left: -43px;
    position: relative;
  }
  .logo {
    top: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    .logo-ico {
      width: 60px;
    }
    .logo-font {
      width: 60px;
    }
  }
  .tips {
    padding-top: 80px;
    padding-left: 15px;
    height: 20vh;
    font-size: 16px;
    user-select: none;
  }
}
/* loading.css */
.loader {
  display: block;
  position: relative;
}
.loading-square {
  position: absolute;
  height: 20px;
  width: 20px;
  top: 0;
}
.loading-square:nth-child(1) {
  left: 0;
  animation: square1 1.4s ease-in forwards infinite;
}
.loading-square:nth-child(2) {
  left: 22px;
  animation: square2 1.4s ease-in-out forwards infinite;
}
.loading-square:nth-child(3) {
  left: 44px;
  animation: square3 1.4s ease-in-out forwards infinite;
}
.loading-square:nth-child(4) {
  left: 66px;
  animation: square4 1.4s ease-out forwards infinite;
}
@keyframes square1 {
  0% {
    background-color: #74ebd5;
    transform: translate(0, 0);
  }
  9.09091% {
    transform: translate(0, calc(-100% - 2px));
    background-color: #74ebd5;
  }
  18.18182% {
    transform: translate(calc(100% + 2px), calc(-100% - 2px));
    background-color: #5272ff;
  }
  27.27273% {
    transform: translate(calc(100% + 2px), 0);
  }
  100% {
    background-color: #5272ff;
    transform: translate(calc(100% + 2px), 0);
  }
}
@keyframes square2 {
  0% {
    background-color: #5272ff;
    transform: translate(0, 0);
  }
  18.18182% {
    transform: translate(0, 0);
  }
  27.27273% {
    transform: translate(0, calc(100% + 2px));
    background-color: #5272ff;
  }
  36.36364% {
    transform: translate(calc(100% + 2px), calc(100% + 2px));
    background-color: #9face6;
  }
  45.45455% {
    transform: translate(calc(100% + 2px), 0);
  }
  100% {
    background-color: #9face6;
    transform: translate(calc(100% + 2px), 0);
  }
}
@keyframes square3 {
  0% {
    background-color: #9face6;
    transform: translate(0, 0);
  }
  36.36364% {
    transform: translate(0, 0);
  }
  45.45455% {
    transform: translate(0, calc(-100% - 2px));
    background-color: #9face6;
  }
  54.54545% {
    transform: translate(calc(100% + 2px), calc(-100% - 2px));
    background-color: #9face656;
  }
  63.63636% {
    transform: translate(calc(100% + 2px), 0);
  }
  100% {
    background-color: #9face656;
    transform: translate(calc(100% + 2px), 0);
  }
}
@keyframes square4 {
  0% {
    transform: translate(0, 0);
    background-color: #9face656;
  }
  54.54545% {
    transform: translate(0, 0);
  }
  63.63636% {
    transform: translate(0, calc(100% + 2px));
    background-color: #9face656;
  }
  72.72727% {
    background-color: #9face6;
  }
  81.81818% {
    background-color: #5272ff;
  }
  90.90909% {
    transform: translate(calc(-300% - 6px), calc(100% + 2px));
    background-color: #74ebd5;
  }
  100% {
    transform: translate(calc(-300% - 6px), 0);
    background-color: #74ebd5;
  }
}
.dot {
  font-family: simsun;
  animation: dot 3s infinite step-start;
  display: inline-block;
  width: 1.5em;
  vertical-align: bottom;
  overflow: hidden;
}
@keyframes dot {
  /*动态改变显示宽度, 但始终让总占据空间不变, 避免抖动*/
  0% {
    width: 0;
    margin-right: 1.5em;
  }
  33% {
    width: 0.5em;
    margin-right: 1em;
  }
  66% {
    width: 1em;
    margin-right: 0.5em;
  }
  100% {
    width: 1.5em;
    margin-right: 0;
  }
}
</style>
