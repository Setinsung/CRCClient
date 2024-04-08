<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const remote_url = ref('')
const isDropDown = ref(false)

remote_url.value = route.query.url as string
window.api.resizeFullWindow()

const onDropDownWindowCtls = () => {
  isDropDown.value = !isDropDown.value
}

const returnHome = () => {
  window.api.resizeCommonWindow()
  router.go(-1)
}
const minimize = () => {
  window.api.minApp()
}
</script>

<template>
  <div class="content">
    <div :class="['window-bar', isDropDown && 'on-drop-down']">
      <div class="window-ctls">
        <div class="blank-place"></div>
        <div class="btn-group">
          <button @click="minimize">
            <icon-minus size="16" />
          </button>
          <button @click="returnHome">
            <icon-close size="16" />
          </button>
        </div>
      </div>
      <div class="drop-down" @click="onDropDownWindowCtls">
        <icon-menu class="drop-down-ico" />
      </div>
    </div>
    <FloatingMenu></FloatingMenu>
    <iframe class="iframe" :src="remote_url" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .window-bar {
    position: absolute;
    top: -25px;
    left: 0;
    height: 25px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #dddddd83;
    transition: all 0.3s;

    &.on-drop-down {
      top: 0;
    }

    .drop-down {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: -25px;
      right: 50%;
      width: 90px;
      height: 25px;
      border-bottom-left-radius: 80%;
      border-bottom-right-radius: 80%;
      transform: translateX(50%);
      background-color: #dddddd83;

      &::before {
        content: '';
        position: absolute;
        left: -12.5px;
        top: 0;
        width: 12.5px;
        height: 12.5px;
        background-image: radial-gradient(12.5px at bottom left, transparent 12.5px, #dddddd83);
      }

      &::after {
        content: '';
        position: absolute;
        right: -12.5px;
        top: 0;
        width: 12.5px;
        height: 12.5px;
        background-image: radial-gradient(12.5px at bottom right, transparent 12.5px, #dddddd83);
      }

      .drop-down-ico {
        color: #aaa;
      }
    }

    .window-ctls {
      display: flex;
      flex: 1;

      .blank-place {
        flex: 1;
        -webkit-app-region: drag;
      }

      .btn-group {
        height: 100%;

        button {
          color: #aaa;
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

  .iframe {
    flex: 1;
    height: 100%;
    width: 100%;
  }
}
</style>
