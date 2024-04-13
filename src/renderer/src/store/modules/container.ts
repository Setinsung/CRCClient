import {
  deleteContainerById,
  getAllContainers,
  getContainerDetailedInfoById
} from '../../api/containerApi'
import { Container, ContainerDetailedInfo } from '../../types/contianerApi'
import { defineStore } from 'pinia'

export default defineStore('container', {
  state: () => ({
    containerList: [] as Container[],
    devicesMode: '1',
    containerInfo: {} as ContainerDetailedInfo,
    bottomloadingMark: 2 // 0 错误 1 尝试连接 2 成功
  }),
  actions: {
    async getContainerListAciton() {
      const res = await getAllContainers()
      this.containerList = res.data
    },
    async getContainerDetailedInfoAction(id: number) {
      const res = await getContainerDetailedInfoById(id)
      this.containerInfo = res.data
    },
    async deleteContainerAciton(id: number) {
      const res = await deleteContainerById(id)
      return res.data
    }
  },
  persist: true
})
