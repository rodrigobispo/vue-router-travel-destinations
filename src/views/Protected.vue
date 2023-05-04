<template>
  <div v-if="logged()">
    <h1>Greetings, {{ username }}</h1>
  </div>
  <div v-else>
    <h1>You are not logged in</h1>
  </div>
  <button @click="logout">{{ textButton }}</button>
</template>

<script>
export default{
  data() {
    return {
      username: window.user
    }
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push({ name: 'login' })
    },
    logged() {
      return window.user != null
    },
  },
  computed: {
    textButton() {
      return this.logged() ? "Logout" : "Sing in"
    }
  }
}
</script>
