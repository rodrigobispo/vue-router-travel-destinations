<template>
  <div class="form">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>

      <label for="username">Username</label>
      <input v-model="username" name="username" type="text" class="input">

      <label for="password">Password</label>
      <input v-model="password" name="password" type="password" class="input">

      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      window.user = this.username
      this.$router.push({ name: 'protected' })
    }
  }
})
</script>
