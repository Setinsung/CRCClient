<script setup lang="ts">
import { reactive, ref } from 'vue'
const paramsItem = ref(1)
const settingsInfo = reactive({
  startupSetting: false,
  updateSetting: true,
  logSetting: '0'
})
const switchSettingItem = (index: number) => {
  paramsItem.value = index
}
</script>

<template>
  <div class="content">
    <div class="params-bar">
      <div :class="['params-item', paramsItem === 1 && 'selected']" @click="switchSettingItem(1)">
        <span>基本设置</span>
      </div>
      <div :class="['params-item', paramsItem === 2 && 'selected']" @click="switchSettingItem(2)">
        <span>其它设置</span>
      </div>
    </div>
    <div v-if="paramsItem === 1" class="params-content">
      <div class="params-content-item startup-setting">
        <h4>开机启动</h4>
        <p>
          <a-checkbox v-model="settingsInfo.startupSetting">开机自动启动（无人值守）</a-checkbox>
        </p>
      </div>
      <div class="params-content-item update-setting">
        <h4>更新设置</h4>
        <p>
          <a-checkbox v-model="settingsInfo.updateSetting">自动更新版本</a-checkbox>
        </p>
        <p class="update-version">当前版本&nbsp;<span>V0.5.0</span></p>
      </div>
      <div class="params-content-item about-setting">
        <h4>关于</h4>
        <p><icon-launch />&nbsp;<span>了解云舟</span></p>
      </div>
      <div class="params-content-item log-setting">
        <h4>日志上报</h4>
        <p>
          <span>上报类型</span>
          <a-select v-model="settingsInfo.logSetting" size="mini" :style="{ width: '100px' }">
            <a-option value="0">Info</a-option>
            <a-option value="1">Warning</a-option>
            <a-option value="2">Error</a-option>
          </a-select>
        </p>
      </div>
    </div>
    <div v-else-if="paramsItem === 2" class="params-content"></div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.content {
  display: flex;
  flex-direction: column;
  padding-left: 25px;

  .params-bar {
    display: flex;
    padding: 10px;

    .params-item {
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

      &.selected {
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

  .params-content {
    margin-top: 30px;
    margin-left: 25px;

    .params-content-item {
      margin-bottom: 25px;

      &.log-setting {
        p {
          span {
            margin-right: 10px;
          }
        }
      }

      &.update-setting {
        .update-version {
          color: #bbb;
        }
      }

      &.about-setting {
        p {
          width: 90px;
          height: 25px;
          line-height: 25px;
          cursor: pointer;

          &:hover {
            color: #bbb;
          }
        }
      }

      h4 {
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: 700;
      }

      p {
        margin-top: 10px;
      }
    }
  }
}
</style>
