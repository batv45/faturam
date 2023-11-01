<template>
  <n-popover trigger="click" placement="bottom" @update:show="handlePopoverShow">
    <template #trigger>
      <n-badge :value="count" mr-20 cursor-pointer>
        <n-icon size="18" color-black dark="color-hex-fff">
          <icon-material-symbols:notifications-outline />
        </n-icon>
      </n-badge>
    </template>
    <n-tabs v-model:value="activeTab" type="line" justify-content="space-around" animated>
      <n-tab-pane
        v-for="tab in tabs"
        :key="tab.name"
        :name="tab.name"
        :tab="tab.title + `(${tab.messages.length})`"
      >
        <ul class="cus-scroll-y max-h-200 w-220">
          <li
            v-for="(item, index) in tab.messages"
            :key="index"
            class="flex-col py-12"
            border-t="1 solid gray-200"
            :style="index > 0 ? '' : 'border: none;'"
          >
            <span mb-4 text-ellipsis>{{ item.content }}</span>
            <span text-hex-bbb>{{ item.time }}</span>
          </li>
        </ul>
      </n-tab-pane>
    </n-tabs>
  </n-popover>
</template>

<script setup>
import { formatDateTime } from '@/utils'

const activeTab = ref('')
const tabs = [
  {
    name: 'zan',
    title: 'like',
    messages: [
      { content: 'Your article "XX" received a like', time: formatDateTime() },
      { content: 'Your article "YY" received a like', time: formatDateTime() },
      { content: 'Your article "AA" received a like', time: formatDateTime() },
      { content: 'Your article "BB" received a like', time: formatDateTime() },
      { content: 'Your article "CC" received a like', time: formatDateTime() },
      { content: 'Your article "DD" received a like', time: formatDateTime() },
    ],
  },
  {
    name: 'star',
    title: 'focus on',
    messages: [
      { content: 'Zhang San followed you', time: formatDateTime() },
      { content: 'Wang Wu followed you', time: formatDateTime() },
    ],
  },
  {
    name: 'comment',
    title: 'Comment',
    messages: [
      { content: 'Zhang San commented on your article "XX" "Learned"', time: formatDateTime() },
      {
        content: 'Li Si commented on your article "YY" as "not as good as Vue"',
        time: formatDateTime(),
      },
    ],
  },
]
const count = ref(tabs.map((item) => item.messages).flat().length)

watch(activeTab, (v) => {
  if (count === 0) return
  const tabIndex = tabs.findIndex((item) => item.name === v)
  count.value -= tabs[tabIndex].messages.length
  if (count.value < 0) count.value = 0
})

function handlePopoverShow(show) {
  if (show && !activeTab.value) {
    activeTab.value = tabs[0]?.name
  }
}
</script>
