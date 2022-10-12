<template>
  <div>
    <h1>请输入账号密码</h1>
  </div>
  <div>
    <button @click="toLogin">登录</button>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const toLogin = (() => {
      router.push({
        name: 'login'
      })
    })
    return {
      toLogin
    }
  },
}
</script>


<style>

</style>
