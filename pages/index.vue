<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const router = useRouter()

// const route = useRoute()
// route.meta.layout = 'custom'

const layoutName = ref('default')
function changeLayout() {
  layoutName.value = layoutName.value === 'default' ? 'custom' : 'default'
}

function routerPush(name: string) {
  router.push({ name })
}
//
onMounted(() => {
  const jwt = getCookie('jwt')
  console.log('🚀 ~ jwt:', jwt)
})
</script>

<template>
  <NuxtLayout :name="layoutName">
    <p>router</p>
    <div class="flex gap10">
      <Button @click="routerPush('about')">
        about page
      </Button>
      <Button @click="routerPush('ui')">
        primevue ui
      </Button>
      <Button @click="routerPush('dark')">
        dark demo
      </Button>
      <Button @click="routerPush('valid')">
        form valid
      </Button>
      <Button @click="routerPush('lay-child')">
        go to lay child
      </Button>
    </div>

    <p>event</p>
    <div class="flex gap10">
      <Button @click="changeLayout">
        change layout
      </Button>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
//
</style>
