import * as NaiveUI from 'naive-ui'
import { isNullOrUndef } from '@/utils'
import { naiveThemeOverrides as themeOverrides } from '~/settings'
import { useAppStore } from '@/store/modules/app'

export function setupMessage(NMessage) {
  let loadingMessage = null
  class Message {
    /**
     * rule:
     * * Only one loading message is displayed, and the new message will replace the currently displayed loading message.
     * * The loading message will not be cleared automatically unless it is replaced with a non-loading message. The non-loading message will be cleared automatically after 2 seconds by default.
     */

    removeMessage(message = loadingMessage, duration = 2000) {
      setTimeout(() => {
        if (message) {
          message.destroy()
          message = null
        }
      }, duration)
    }

    showMessage(type, content, option = {}) {
      if (loadingMessage && loadingMessage.type === 'loading') {
        //If it exists, replace the loading message being displayed.
        loadingMessage.type = type
        loadingMessage.content = content

        if (type !== 'loading') {
          // 非loading message需设置自动清除
          this.removeMessage(loadingMessage, option.duration)
        }
      } else {
        // If there is no loading being displayed, create a new message. If the new message is a loading message, store the message assignment.
        let message = NMessage[type](content, option)
        if (type === 'loading') {
          loadingMessage = message
        }
      }
    }

    loading(content) {
      this.showMessage('loading', content, { duration: 0 })
    }

    success(content, option = {}) {
      this.showMessage('success', content, option)
    }

    error(content, option = {}) {
      this.showMessage('error', content, option)
    }

    info(content, option = {}) {
      this.showMessage('info', content, option)
    }

    warning(content, option = {}) {
      this.showMessage('warning', content, option)
    }
  }

  return new Message()
}

export function setupDialog(NDialog) {
  NDialog.confirm = function (option = {}) {
    const showIcon = !isNullOrUndef(option.title)
    return NDialog[option.type || 'warning']({
      showIcon,
      positiveText: 'Tamam',
      negativeText: 'Vazgeç',
      onPositiveClick: option.confirm,
      onNegativeClick: option.cancel,
      onMaskClick: option.cancel,
      ...option,
    })
  }

  return NDialog
}

export function setupNaiveDiscreteApi() {
  const appStore = useAppStore()
  const configProviderProps = computed(() => ({
    theme: appStore.isDark ? NaiveUI.darkTheme : undefined,
    themeOverrides,
  }))
  const { message, dialog, notification, loadingBar } = NaiveUI.createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    { configProviderProps }
  )

  window.$loadingBar = loadingBar
  window.$notification = notification
  window.$message = setupMessage(message)
  window.$dialog = setupDialog(dialog)
}
