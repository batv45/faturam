<template>
  <div flex items-center>
    <MenuCollapse block sm:hidden />
    <BreadCrumb ml-15 hidden sm:block />
  </div>
  <div ml-auto flex items-center>
    <MessageNotification />
    <ThemeMode />
    <FullScreen />
    <UserAvatar />
  </div>
</template>

<script setup>
import BreadCrumb from './components/BreadCrumb.vue'
import MenuCollapse from './components/MenuCollapse.vue'
import FullScreen from './components/FullScreen.vue'
import UserAvatar from './components/UserAvatar.vue'
import ThemeMode from './components/ThemeMode.vue'
import MessageNotification from './components/MessageNotification.vue'
</script>
