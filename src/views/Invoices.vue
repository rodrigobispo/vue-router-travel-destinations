<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

export default defineComponent({
  name: 'Invoices',
  setup() {
    // eslint-disable-next-line no-unused-vars
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        'Are you sure you want to leave? Invoices are super awasome!'
      )
      if (!answer) return false
    })
  }
})
</script>
