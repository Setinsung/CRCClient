<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const input_url = ref('')

const startLink = () => {
  router.push({ path: '/linking', query: { url: input_url.value } })
}
</script>

<template>
  <div class="content">
    <h2>发起连接</h2>
    <a-input v-model="input_url" class="url-input" placeholder="Please enter the url" allow-clear />
    <a-button class="link_btn" type="primary" @click="startLink">
      <icon-link size="24" />
      <span>发起连接</span>
    </a-button>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 100px;

  .url-input {
    width: 55%;
    height: 50px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .link_btn {
    align-items: center;
    width: 55%;
    height: 50px;
    background-color: #5272ff;
    border-radius: 5px;

    &:hover {
      background-color: #254dfe;
    }

    span {
      padding-left: 5px;
      font-size: larger;
    }
  }

  iframe {
    height: 100%;
    width: 100%;
  }
}
</style>
