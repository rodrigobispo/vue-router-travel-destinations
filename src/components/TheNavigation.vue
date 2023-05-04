<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue Study Travel App</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params:{ id: destination.id, slug: destination.slug } }"
      >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script>

import sourceData from '@/data.json'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheNavigation',
  data: () => {
    return {
      destinations: sourceData.destinations
    }
  }
})

</script>
