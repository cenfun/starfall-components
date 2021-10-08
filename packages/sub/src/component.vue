<template>
  <div class="starfall-vue-components-sub">
    <div class="starfall-vue-components-sub-title">
      <p>{{ name }}</p>
    </div>
    <div class="starfall-vue-components-sub-content">
      {{ value }}
    </div>
    <div class="starfall-vue-components-sub-action">
      <button @click="increment">
        increment+
      </button>
      <button @click="decrement">
        decrement-
      </button>
    </div>
  </div>
</template>
<script>
export default {
    name: "StarfallVueComponentsSub",
    data() {
        return {
            value: 0,
            name: "starfall-vue-components-sub"
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
.starfall-vue-components-sub {
    width: 300px;
    margin: auto;
    text-align: center;

    .starfall-vue-components-sub-title {
        font-size: 30px;
    }

    .starfall-vue-components-sub-content {
        padding: 10px 10px;
        color: red;
        font-size: 20px;
        font-weight: bold;
    }

    .starfall-vue-components-sub-action {
        button {
            padding: 5px 5px;
        }
    }
}
</style>