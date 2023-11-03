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
import api from './api'
import fatura from 'fatura'

defineOptions({ name: 'FaturaListe' })
const inputVal = ref('')
const number = ref(0)
const interaktif = ref()

const portalToken = ref()
fatura.enableTestMode()

onMounted(async () => {
  interaktif.value = await api.getData()
  if (interaktif.value.data.user && interaktif.value.data.pass) {
    portalToken.value = await fatura.getToken(
      interaktif.value.data.user,
      interaktif.value.data.pass
    )
    console.log(portalToken.value)
  }
})
</script>
