import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      minApp: () => void
      closeApp: () => void
      resizeFullWindow: () => void
      resizeCommonWindow: () => void
      resizeLoginWindow: () => void
      openExternalUrl: (url: string) => void
    }
  }
}
