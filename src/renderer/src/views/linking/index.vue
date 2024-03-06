<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const remote_url = ref('')

remote_url.value = route.query.url as string
window.electron.ipcRenderer.send('resize-full-window')

const returnHome = () => {
  window.electron.ipcRenderer.send('resize-common-window')
  router.go(-1)
}
</script>

<template>
  <div class="content">
    <div class="iframe-bar">
      <a-button class="return-btn" type="primary" @click="returnHome">
        <icon-undo size="18" />
        <span>返回</span>
      </a-button>
      <div class="url-txt">url：{{ remote_url }}</div>
    </div>
    <iframe class="iframe" :src="remote_url" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;

  .iframe-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .return-btn {
      span {
        padding-left: 3px;
      }
    }
    .url-txt {
      margin-left: 20px;
    }
  }

  .iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
