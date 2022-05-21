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
        increment+
      </button>
      <button @click="decrement">
        decrement-
      </button>
    </div>
    <lit-component style="display: block; background: gray; padding: 10px; margin: 10px;" />
  </div>
</template>
<script>
export default {
    name: 'StarfallVueComponentsSub',
    data() {
        return {
            value: 0,
            name: 'starfall-components-sub'
        };
    },
    methods: {
        increment() {
            this.value += 1;
        },
        decrement() {
            this.value -= 1;
        }
    }
};
</script>
<style scoped lang="scss">
.starfall-components-sub {
    width: 300px;
    margin: auto;
    text-align: center;

    .starfall-components-sub-title {
        font-size: 30px;
    }

    .starfall-components-sub-content {
        padding: 10px 10px;
        color: red;
        font-size: 20px;
        font-weight: bold;
    }

    .starfall-components-sub-action {
        button {
            padding: 5px 5px;
        }
    }
}
</style>
