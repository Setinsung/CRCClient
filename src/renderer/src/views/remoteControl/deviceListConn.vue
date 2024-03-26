<script setup lang="ts">
import { ref } from 'vue'
import useStore from '../../store'
import { useRouter } from 'vue-router'
const router = useRouter()
const { containerStore } = useStore()
const choosedDeviceIndex = ref<number | null>(null)

// 容器选中
const onDeviceChoose = (index: number, state: string) => {
  if (state !== 'Running') return
  if (choosedDeviceIndex.value === index) choosedDeviceIndex.value = null
  else choosedDeviceIndex.value = index
}

// 容器标签颜色
const getDeviceTagColor = (image: string) => {
  const imageType = image.substring(0, image.indexOf(':'))
  if (imageType === 'uos') return 'blue'
  else if (imageType === 'kylin') return 'red'
  else return 'gray'
}

// 发起连接
const onConnectDesktop = async (id: number) => {
  await containerStore.getContainerDetailedInfoAction(id)
  router.push({
    path: '/linking',
    query: { url: 'http://192.168.1.103' + containerStore.containerInfo.accessUrl }
  })
}

// init
containerStore.getContainerListAciton()
</script>
<template>
  <div class="content">
    <div class="device-type">
      <a-radio-group v-model="containerStore.devicesMode">
        <a-radio :default-checked="true" value="1">全部设备</a-radio>
        <a-radio value="2">历史设备</a-radio>
      </a-radio-group>
    </div>
    <div class="device-list">
      <div
        v-for="item in containerStore.containerList"
        :key="item.id"
        :class="[
          'device-item',
          choosedDeviceIndex != null && item.id == choosedDeviceIndex && 'show-btns'
        ]"
      >
        <div class="device-tags">
          <a-tag :color="getDeviceTagColor(item.image)" size="small">{{ item.image }}</a-tag>
        </div>
        <div class="device-img" @click="onDeviceChoose(item.id, item.state)">
          <img
            :class="[item.state !== 'Running' && 'img-gray']"
            src="../../assets/images/default_desktop.jpeg"
          />
          <div class="operation-btns">
            <a-button type="primary" size="small" @click="onConnectDesktop(item.id)">
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
            {{ item.name }}
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
    overflow-y: auto;

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

      .device-tags {
        position: absolute;
        left: 5px;
        top: 5px;
        width: 5px;
        background-color: red;
        z-index: 98;
      }

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

          &.img-gray {
            -webkit-filter: grayscale(100%);
            -moz-filter: grayscale(100%);
            -ms-filter: grayscale(100%);
            -o-filter: grayscale(100%);
            filter: grayscale(100%);
            filter: gray;
          }
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
