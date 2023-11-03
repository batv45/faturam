<template>
  <n-dropdown :options="options" @select="handleSelect">
    <div flex cursor-pointer items-center>
      <img :src="userStore.avatar" mr10 h-35 w-35 rounded-full />
      <span>{{ userStore.name }}</span>
    </div>
  </n-dropdown>
</template>

<script setup>
import { useUserStore } from '@/store'
import { renderIcon } from '@/utils'

const userStore = useUserStore()

const options = [
  {
    label: 'Oturumu Kapat',
    key: 'logout',
    icon: renderIcon('mdi:exit-to-app', { size: '14px' }),
  },
]

function handleSelect(key) {
  if (key === 'logout') {
    $dialog.confirm({
      title: 'Emin misiniz?',
      type: 'info',
      content: 'Çıkış yapmak istiyor musunuz?',
      confirm() {
        userStore.logout()
        $message.success('Oturum kapatıldı.')
      },
    })
  }
}
</script>
