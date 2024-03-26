export interface Container {
  id: number
  name: string
  state: string
  image: string
  createdTime: string
  ports: number[]
  owner: string | null
  ipaddr: string
}
export type IGetContainerDataResp = Container[]

export interface ContainerDetailedInfo {
  name: string
  ip: string
  state: string
  createdTime: string
  accessUrl: string
  log: string
  metrics: Metric[]
}

export interface Metric {
  name: string
  number: number
  format: string
}
