<template>
  <n-icon size="20" cursor-pointer @click="appStore.switchCollapsed">
    <span>
      <icon-tabler:menu-2 v-if="appStore.collapsed" />
      <icon-tabler:x v-else />
    </span>
  </n-icon>
</template>

<script setup>
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>
