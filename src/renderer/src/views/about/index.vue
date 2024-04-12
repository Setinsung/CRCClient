<script setup lang="ts"></script>

<template>
  <div class="content">
    <a-card
      title="团队信息"
      hoverable
      :style="{ width: '380px', height: '200px', marginBottom: '20px' }"
    >
      <div
        :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }"
      >
        <p class="teamInfo-content">
          本客户端由杭州电子科技大学&nbsp;<span>小猫老弟队</span>&nbsp;制作
        </p>
      </div>
    </a-card>
  </div>
</template>

<style scoped lang="less">
.content {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  .teamInfo-content {
    font-size: 16px;
    span {
      font-weight: 700;
    }
  }
}
</style>
