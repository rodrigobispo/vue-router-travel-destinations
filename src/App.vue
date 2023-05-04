<template>
  <TheNavigation/>
  <div class="container">
    <router-view v-slot="{ Component }">

      <transition name="slide" mode="out-in">

        <component :is="Component" :key="$route.path"></component>

      </transition>

    </router-view>
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

<style lang="css">
/*
  Enter and leave animations can use different durations and timing functions.
*/
.slide-enter-active,

.slide-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.slide-enter-from,

.slide-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}
</style>