<template>
  <AppPage :show-footer="true">
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-3">
      <n-card class="col-span-1">
        <div class="flex items-center">
          <n-avatar round :size="60" :src="userStore.avatar" />
          <div class="ml-20 flex-col">
            <span class="text-20 opacity-80">Hello, {{ userStore.name }}</span>
            <span class="mt-4 opacity-50">TOKEN: {{ userToken }}</span>
          </div>
        </div>

        <p class="mt-20 text-14 opacity-60">
          A person can succeed in almost anything for which he has unlimited enthusiasm.
        </p>
        <p class="mt-12 text-right text-12 opacity-40">——Charles Scober</p>
      </n-card>
      <n-card class="col-span-2">
        <h3 class="text-20 font-normal opacity-90">⚡️Welcome to Vue Naive Admin</h3>
        <p class="mt-8 opacity-60">
          This is a lightweight backend management template based on Vue3 + Vite + Pinia + Unocss +
          Naive UI! !
        </p>
        <footer class="mt-24 flex flex-wrap items-center justify-start gap-10 sm:justify-end">
          <n-button
            class=""
            tag="a"
            href="https://zclzone.github.io/vue-naive-admin-docs"
            target="_blank"
            type="primary"
            ghost
          >
            Development documentation
          </n-button>
          <n-button
            tag="a"
            href="https://github.com/zclzone/vue-naive-admin"
            target="_blank"
            type="primary"
            class=""
          >
            code repository
          </n-button>
        </footer>
      </n-card>
    </div>
    <div class="mt-10">
      <n-card>
        <pre>{{ userStore.userInfo }}</pre>
      </n-card>
    </div>
  </AppPage>
</template>

<script setup>
import { useUserStore } from '@/store'
import { getToken } from '~/src/utils'

const userStore = useUserStore()
const userToken = getToken()
</script>
