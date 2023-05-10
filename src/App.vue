<template>
  <TheNavigation/>
  <div class="container">
    <router-view class="view left-sidebar" name="LeftSidebar"></router-view>
    <router-view class="main-view" />
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

.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}

</style>