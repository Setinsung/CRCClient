import { getAllContainers, getContainerDetailedInfoById } from '../../api/containerApi'
import { Container, ContainerDetailedInfo } from '../../types/contianerApi'
import { defineStore } from 'pinia'

export default defineStore('container', {
  state: () => ({
    containerList: [] as Container[],
    devicesMode: '1',
    containerInfo: {} as ContainerDetailedInfo
  }),
  actions: {
    async getContainerListAciton() {
      const res = await getAllContainers()
      this.containerList = res.data
    },
    async getContainerDetailedInfoAction(id: number) {
      const res = await getContainerDetailedInfoById(id)
      this.containerInfo = res.data
    }
  },
  persist: true
})
