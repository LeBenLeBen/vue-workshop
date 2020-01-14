<template>
  <form
    action=""
    class="flex items-center p-4 mb-10 bg-white rounded shadow"
    @submit.prevent="addItem"
  >
    <label for="item" class="sr-only">Item name</label>
    <input
      id="item"
      v-model="name"
      type="text"
      class="flex-grow border border-gray-500 rounded py-2 px-4"
      placeholder="Item name"
    />
    <button
      type="submit"
      class="ml-3 py-2 px-4 text-white font-semibold bg-blue-600 rounded"
    >
      Add
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },

  methods: {
    addItem() {
      const name = this.name.trim();

      if (!name) return;

      this.$emit('add', {
        name,
        bought: false,
      });
      this.name = '';
    },
  },
};
</script>
