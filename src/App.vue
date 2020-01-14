<template>
  <div id="app" class="p-4 mx-auto max-w-xl">
    <h1 class="text-4xl mb-6">Shopping list</h1>

    <form
      action=""
      class="flex items-center p-4 mb-10 bg-white rounded shadow"
      @submit.prevent="addItem"
    >
      <label for="item" class="sr-only">Item name</label>
      <input
        id="item"
        v-model="form.name"
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

    <div class="text-gray-600 tracking-wide text-sm uppercase text-center">
      {{ counter }}
    </div>

    <ul class="my-6 border-b border-gray-400">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="py-2 border-t border-gray-400"
      >
        <ListItem
          :item="item"
          @toggleBought="bought => (item.bought = bought)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';

export default {
  name: 'App',

  components: {
    ListItem,
  },

  data() {
    return {
      form: {
        name: '',
      },
      items: [
        {
          name: 'Bananas',
          bought: false,
        },
        {
          name: 'Tofu',
          bought: false,
        },
        {
          name: 'Milk',
          bought: false,
        },
      ],
    };
  },

  computed: {
    counter() {
      const length = this.items.length;
      return length === 1 ? '1 item' : `${length} items`;
    },
  },

  methods: {
    addItem() {
      const name = this.form.name.trim();

      if (!name) return;

      this.items.push({
        name,
        bought: false,
      });
      this.form.name = '';
    },
  },
};
</script>

<style></style>
