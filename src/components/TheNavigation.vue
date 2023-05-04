<template>
  <div id="nav">
    <AppLink id="logo" to="/">Vue Study Travel App</AppLink>
    <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params:{ id: destination.id, slug: destination.slug } }"
      >
      {{ destination.name }}
    </AppLink>
    <AppLink :to="{name: 'protected' }">Dashboard</AppLink>
    <AppLink to="http://www.google.com">Google</AppLink>
  </div>
</template>

<script>

import sourceData from '@/data.json'
import { defineComponent } from 'vue';
import AppLink from './AppLink.vue';

export default defineComponent({
    name: "TheNavigation",
    data: () => {
        return {
            destinations: sourceData.destinations
        };
    },
    components: { AppLink }
})

</script>
