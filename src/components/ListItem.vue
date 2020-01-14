<template>
  <div>
    <Btn
      class="text-left hover:line-through"
      :class="{ 'line-through text-gray-500': item.bought }"
      block
      @click="toggleBought"
    >
      {{ item.name }}
    </Btn>
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
