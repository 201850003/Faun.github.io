<template>
  <div>
    <button @click="toHome">Faun 个人主页</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const toHome = (() => {
      router.push({
        name: 'home'
      })
    })
    return {
      toHome
    }
  },
}
</script>

<style>
</style>
