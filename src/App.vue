<template>
  <TheNavigation/>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TheNavigation from '@/components/TheNavigation.vue';

export default defineComponent({
  components: {
    TheNavigation
  }
})
</script>
