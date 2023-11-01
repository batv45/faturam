<template>
  <CommonPage show-footer>
    <template #action>burası action</template>
    <div w-350>
      <n-input v-model:value="inputVal" />
      <n-input-number v-model:value="number" mt-30 />
      <p mt-20 text-center text-14 color-gray>
        Note: Right-click the label and reload to reset keep-alive
      </p>
    </div>
  </CommonPage>
</template>

<script setup>
defineOptions({ name: 'FaturaListe' })
const inputVal = ref('')
const number = ref(0)

onMounted(() => {
  $message.success('onMounted')
})

onUnmounted(() => {
  $message.error('onUnmounted')
})

onActivated(() => {
  $message.info('onActivated')
})
onDeactivated(() => {
  $message.warning('onDeactivated')
})
</script>
