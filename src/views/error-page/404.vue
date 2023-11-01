<template>
  <AppPage>
    <n-result m-auto status="404" description="Üzgünüm, ziyaret ettiğiniz sayfa mevcut değil.">
      <template #icon>
        <img src="@/assets/images/404.webp" width="500" />
      </template>
      <template #footer>
        <n-button @click="replace('/')">Ana sayfaya dön</n-button>
      </template>
    </n-result>
  </AppPage>
</template>

<script setup>
const { replace } = useRouter()
</script>
