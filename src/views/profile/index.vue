<script setup>
import CommonPage from '@/components/page/CommonPage.vue'
import { useUserStore } from '@/store/index.js'

const userStore = useUserStore()
</script>

<template>
  <CommonPage>
    <n-avatar :size="48" :src="userStore.avatar" />
    <n-h3>{{ userStore.name }}</n-h3>
  </CommonPage>
</template>
