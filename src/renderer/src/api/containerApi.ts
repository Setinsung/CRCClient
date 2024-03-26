import { ContainerDetailedInfo, IGetContainerDataResp } from '../types/contianerApi'
import { TResponseData } from '../types/commonApi'
import axios from './axios'

export const getAllContainers = async () => {
  const res = await axios.get<TResponseData<IGetContainerDataResp>>('container')
  return res.data
}

export const getContainerDetailedInfoById = async (id: number) => {
  const res = await axios.get<TResponseData<ContainerDetailedInfo>>('container/get?id=' + id)
  return res.data
}
