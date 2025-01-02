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
  if (url.startsWith('tel:')) {
    window.location.href = url
  } else {
    window.open(url, '_blank')
  }
}

const downloadVCard = () => {
  console.log('Download vCard')
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${user.value.name}
TITLE:${user.value.job}
TEL;TYPE=CELL:${user.value.phone}
EMAIL;TYPE=INTERNET:${user.value.email}
BDAY:${user.value.birthdate}
X-SOCIALPROFILE;TYPE=LinkedIn:${user.value.linkedin}
NOTE:${user.value.note}
END:VCARD
  `
  const blob = new Blob([vCardData], { type: 'text/vcard' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'contact.vcf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script>

<template>
  <header class="flex justify-center flex-col items-center mb-5">
    <img class="w-20 rounded-full" src="https://th.bing.com/th?id=OIP.bojH_lZgOaNeVFcJMXox_AAAAA&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" alt="Avatar" />
    <span>{{ user.name }}</span>
    <span>{{ user.job }}</span>
    <span>{{ user.company }}</span>
  </header>
  <main class="grid grid-cols-2 gap-3 justify-items-center">
    <Icon
      class="center"
      width="40px"
      icon="skill-icons:instagram"
      @click="openUrl(user.instagram)"
    />
    <Icon width="40px" icon="raphael:phone" @click="openUrl('tel:' + user.phone)" />
    <Icon width="40px" icon="devicon:linkedin" @click="openUrl(user.linkedin)" />
    <Icon width="40px" icon="logos:whatsapp-icon" @click="openUrl('https://api.whatsapp.com/send/?phone=' + user.phone + '&text=Hola+encantado+de+saludarte&type=phone_number&app_absent=0')" />
    <Icon width="40px" icon="logos:google-gmail" @click="openUrl('mailto:' + user.email)" />
    <Icon width="40px" icon="bxs:contact" @click="downloadVCard()" />
  </main>
</template>
