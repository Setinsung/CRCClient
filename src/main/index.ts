import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
let mainWinId: number | undefined
let loadingWinId: number | undefined

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minWidth: 771,
    minHeight: 545,
    frame: false,
    show: false,
    autoHideMenuBar: true,
    icon: icon,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  // mainWindow.on('ready-to-show', () => {
  //   mainWindow.show()
  // })

  mainWindow.once('ready-to-show', () => {
    if (loadingWinId) {
      const loadingWindow = BrowserWindow.fromId(loadingWinId)
      loadingWindow?.hide()
      loadingWindow?.close()
      mainWindow.show()
    }
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  // 模拟启动时间
  // setTimeout(() => {
  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
  // }, 200000)

  mainWinId = mainWindow.id
}

// 加载窗口
const createLoadingWindow = (cb: () => void) => {
  const loadingWindow = new BrowserWindow({
    show: false,
    frame: false,
    width: 200,
    height: 240,
    resizable: false,
    icon: icon,
    transparent: true
  })

  loadingWindow.once('show', cb)
  if (is.dev) {
    loadingWindow.loadURL('http://localhost:5173/#/loading')
  } else {
    loadingWindow.loadFile(join(__dirname, `../renderer/index.html/#/loading`))
  }
  loadingWindow.on('ready-to-show', () => {
    loadingWindow.show()
  })
  loadingWinId = loadingWindow.id
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  // close app
  ipcMain.on('close-app', () => {
    if (mainWinId) {
      const mainWindow = BrowserWindow.fromId(mainWinId)
      if (mainWindow) {
        mainWindow.close()
      }
    }
  })

  // minimize app
  ipcMain.on('min-app', () => {
    const currentWindow = BrowserWindow.getFocusedWindow()
    if (currentWindow) {
      currentWindow.minimize()
    }
  })

  // resize window
  ipcMain.on('resize-full-window', () => {
    const currentWindow = BrowserWindow.getFocusedWindow()
    if (currentWindow) {
      currentWindow.setMinimumSize(771, 545)
      currentWindow.setSize(1280, 768)
      currentWindow.center()
    }
  })

  ipcMain.on('resize-login-window', () => {
    const currentWindow = BrowserWindow.getFocusedWindow()
    if (currentWindow) {
      currentWindow.setMinimumSize(320, 440)
      currentWindow.setSize(320, 440)
      currentWindow.center()
    }
  })

  ipcMain.on('resize-common-window', () => {
    const currentWindow = BrowserWindow.getFocusedWindow()
    if (currentWindow) {
      currentWindow.setMinimumSize(771, 545)
      currentWindow.setSize(771, 545)
      currentWindow.center()
    }
  })

  // 打开外部url
  ipcMain.on('open-url', (_, url) => {
    shell.openExternal(url)
  })

  // createWindow()
  createLoadingWindow(createWindow)

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
