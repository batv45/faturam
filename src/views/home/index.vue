<template>
  <AppPage :show-footer="true">
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-3">
      <n-card class="col-span-1">
        <div class="flex items-center">
          <n-avatar round :size="60" :src="userStore.avatar" />
          <div class="ml-20 flex-col">
            <span class="text-20 opacity-80">Hello, {{ userStore.name }}</span>
<<<<<<< Updated upstream
            <span class="mt-4 opacity-50">Today's things are done today.</span>
=======
            <span class="mt-4 opacity-50">TOKEN: {{ userToken }}</span>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <div class="mt-12 flex">
      <n-card title="project" segmented>
        <template #header-extra>
          <n-button text type="primary">More</n-button>
        </template>
        <div class="flex flex-wrap justify-between">
          <n-card
            v-for="i in 6"
            :key="i"
            size="small"
            class="my-6 w-320 flex-shrink-0 cursor-pointer hover:card-shadow"
            title="Vue Naive Admin"
          >
            <p class="op-60">
              A lightweight backend management template based on Vue3.0, Vite, and Naive UI
            </p>
          </n-card>
          <div h-0 w-300></div>
          <div h-0 w-300></div>
          <div h-0 w-300></div>
          <div h-0 w-300></div>
        </div>
      </n-card>

      <n-card class="ml-12" title="technology stack" segmented>
        <VChart :option="skillsOption" class="wh-full" autoresize />
      </n-card>
    </div>

    <n-card class="mt-12" title="trend" segmented>
      <VChart :option="trendOption" class="h-480 w-full" autoresize />
    </n-card>
=======
    <div class="mt-10">
      <n-card>
        <pre>{{ userStore.userInfo }}</pre>
      </n-card>
    </div>
>>>>>>> Stashed changes
  </AppPage>
</template>

<script setup>
import { useUserStore } from '@/store'
<<<<<<< Updated upstream
import * as echarts from 'echarts/core'
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'

const userStore = useUserStore()

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  PieChart,
])

const trendOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
    },
  },
  legend: {
    top: '5%',
    data: ['star', 'fork'],
  },
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisPointer: {
        type: 'shadow',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 3000,
      interval: 500,
      axisLabel: {
        formatter: '{value}',
      },
    },
    {
      type: 'value',
      min: 0,
      max: 500,
      interval: 100,
      axisLabel: {
        formatter: '{value}',
      },
    },
  ],
  series: [
    {
      name: 'star',
      type: 'line',
      data: [200, 320, 520, 550, 600, 805, 888, 950, 1300, 2503, 2702, 2712],
    },
    {
      name: 'fork',
      yAxisIndex: 1,
      type: 'bar',
      data: [40, 72, 110, 115, 121, 175, 180, 201, 260, 398, 423, 455],
    },
  ],
}

const skillsOption = {
  tooltip: {
    trigger: 'item',
    formatter({ name, value }) {
      return `${name} ${value}%`
    },
  },
  legend: {
    left: 'center',
  },
  series: [
    {
      top: '7%',
      type: 'pie',
      radius: ['40%', '85%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 36,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 38.5, name: 'Vue' },
        { value: 37.0, name: 'JavaScript' },
        { value: 6.5, name: 'CSS' },
        { value: 6.2, name: 'HTML' },
        { value: 1.8, name: 'Other' },
      ],
    },
  ],
}
=======
import { getToken } from '~/src/utils'

const userStore = useUserStore()
const userToken = getToken()
>>>>>>> Stashed changes
</script>
