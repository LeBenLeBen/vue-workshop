<template>
  <div>
    <button
      type="button"
      class="block w-full text-left"
      :class="{ 'line-through text-gray-600': item.bought }"
      @click="toggleBought"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    toggleBought() {
      this.$emit('toggleBought', !this.item.bought);
    },
  },
};
</script>
