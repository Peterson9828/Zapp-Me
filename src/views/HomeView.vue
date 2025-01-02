<script setup>
import { Icon } from '@iconify/vue'
import { doc, getFirestore } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { useDocument } from 'vuefire'
const route = useRoute()
const id = route.params.id
const db = getFirestore()
const userDoc = doc(db, 'user', id)
const user = useDocument(userDoc)
const openUrl = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <header class="flex justify-center flex-col items-center mb-5">
    <img class="w-20 rounded-full" :src="user.avatar" alt="Rounded avatar" />
    <span>{{ user.job }}</span>
    <span>{{ user.company }}</span>
  </header>
  <main class="grid grid-cols-2 gap-3">
    <Icon width="50px" icon="skill-icons:instagram" @click="openUrl(user.instagram)" />
    <Icon width="50px" icon="logos:whatsapp-icon" @click="openUrl(user.whatsapp)" />
    <Icon width="50px" icon="devicon:linkedin" @click="openUrl(user.linkedin)" />
    <Icon width="50px" icon="logos:telegram" @click="openUrl(user.telegram)" />
    <Icon width="50px" icon="logos:tiktok-icon" @click="openUrl(user.tiktok)" />
    <Icon width="50px" icon="logos:x" @click="openUrl(user.x)" />
  </main>
</template>
