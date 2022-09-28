<template>
  <div class="starfall-components-sub">
    <div class="starfall-components-sub-title">
      <p>{{ name }}</p>
    </div>
    <div class="starfall-components-sub-content">
      {{ value }}
    </div>
    <div class="starfall-components-sub-action">
      <button @click="increment">
        increment +
      </button>
      <button @click="decrement">
        decrement -
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const name = 'Sub Vue Component';
const value = ref(0);

const increment = () => {
    value.value += 1;
};
const decrement = () => {
    value.value -= 1;
};

onMounted(() => {
    value.value = 3;
});

</script>

<style lang="scss">
.starfall-components-sub {
    width: 300px;
    margin: auto;
    text-align: center;

    .starfall-components-sub-title {
        font-size: 30px;
    }

    .starfall-components-sub-content {
        padding: 10px;
        color: red;
        font-size: 20px;
        font-weight: bold;
    }

    .starfall-components-sub-action {
        button {
            padding: 5px;
            margin: 5px;
        }
    }
}
</style>
