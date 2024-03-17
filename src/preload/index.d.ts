import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      minApp: () => void
      closeApp: () => void
    }
  }
}
