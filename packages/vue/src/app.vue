<template>
  <div class="app">
    {{ state.app }}
    <span>
      Test Vue3 Tree Shaking
    </span>
  </div>
</template>

<script setup>
import { reactive } from 'vue';


const state = reactive({
    title: 'Vue App'
});

</script>

<style lang="scss">
.app {
    position: relative;

    span {
        display: block;
    }
}
</style>
