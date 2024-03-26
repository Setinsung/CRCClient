import useUserStore from './modules/user'
import useContainerStore from './modules/container'

export default () => ({
  userStore: useUserStore(),
  containerStore: useContainerStore()
})
