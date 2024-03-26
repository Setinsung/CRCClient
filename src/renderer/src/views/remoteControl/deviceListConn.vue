<script setup lang="ts">
import { ref } from 'vue'

const choosedDeviceIndex = ref<number | null>(null)

const deviceList = [
  'UOS-RG92FJ4D',
  'UOS-67KR0DB2',
  'KylinOS-PLN31FJ8',
  'KylinOS-32FJ0K9D',
  'UOS-9D8G1KLO',
  'UOS-R9GK0DF4',
  'KylinOS-KJDF046G',
  'KylinOS-0NGM2JFD',
  'UOS-7JKL4K0D',
  'UOS-DFJ23NKM'
]
const onDeviceChoose = (index: number) => {
  console.log('choosedDeviceIndex.value', choosedDeviceIndex.value)
  console.log('index', index)

  if (choosedDeviceIndex.value === index) choosedDeviceIndex.value = null
  else choosedDeviceIndex.value = index
}
</script>
<template>
  <div class="content">
    <div class="device-type">
      <a-radio-group>
        <a-radio :default-checked="true" value="A">全部设备</a-radio>
        <a-radio value="B">历史设备</a-radio>
      </a-radio-group>
    </div>

    <div class="device-list">
      <div
        v-for="(item, index) in deviceList"
        :key="index"
        :class="[
          'device-item',
          choosedDeviceIndex != null && index == choosedDeviceIndex && 'show-btns'
        ]"
        @click="onDeviceChoose(index)"
      >
        <div class="device-img">
          <img src="../../assets/images/default_desktop.jpeg" />
          <div class="operation-btns">
            <a-button type="primary" size="small">
              <span>连接桌面</span>
            </a-button>
            <a-button type="primary" size="small">
              <span>连接终端</span>
            </a-button>
          </div>
        </div>
        <div class="device-info">
          <a-typography-paragraph
            class="device-name"
            :ellipsis="{
              rows: 1,
              showTooltip: true
            }"
          >
            {{ item }}
          </a-typography-paragraph>
          <div class="device-more"><icon-more :rotate="90" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.arco-card-size-medium .arco-card-body {
  padding: 0;
}

.content {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .device-type {
    margin-bottom: 20px;
  }

  .device-list {
    display: flex;
    flex-wrap: wrap;
    height: 70vh;
    overflow-x: hidden;
    overflow-y: scroll;

    .device-item {
      position: relative;
      width: 160px;
      height: 140px;
      margin-right: 10px;
      margin-bottom: 10px;
      border: 1.5px solid #eee;
      border-radius: 5px;
      overflow: hidden;
      transition: all 0.5s;

      &:hover {
        box-shadow:
          0.2px 0.2px 3.6px rgba(0, 0, 0, 0.021),
          0.6px 0.6px 10px rgba(0, 0, 0, 0.03),
          1.5px 1.5px 24.1px rgba(0, 0, 0, 0.039),
          5px 5px 80px rgba(0, 0, 0, 0.06);

        img {
          transform: scale(1.2);
        }
      }

      &.show-btns .device-img {
        img {
          transform: scale(1.2);
        }

        .operation-btns {
          top: 18px;
          opacity: 1;

          button {
            opacity: 1;
          }
        }
      }

      .device-img {
        position: relative;
        width: 100%;
        height: 105px;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 105px;
          transition: all 0.5s;
        }

        .operation-btns {
          opacity: 0.5;
          display: flex;
          position: absolute;
          top: 100px;
          left: 35px;
          background-color: transparent;
          flex-direction: column;
          transition: opacity 1s;
          transition: top 0.3s;
          z-index: 99;

          button {
            opacity: 0;
            height: 30px;
            margin-bottom: 10px;
            transition: opacity 0.6s;
          }
        }
      }

      .device-info {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-left: 5px;
        padding-right: 2px;

        .device-name {
          height: 35px;
          line-height: 35px;
          width: 80%;
          user-select: none;
        }

        .device-more {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          margin-top: 5px;
          border-radius: 50%;
          transition: all 0.2s;
          cursor: pointer;

          &:hover {
            background-color: rgb(var(--gray-2));
          }
        }
      }
    }
  }
}
</style>
