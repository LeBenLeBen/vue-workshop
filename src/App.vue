<template>
  <div id="app" class="p-4 mx-auto max-w-xl">
    <h1 class="text-4xl mb-6">Shopping list</h1>

    <ul class="my-6 border-b border-gray-400">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="py-2 border-t border-gray-400"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      items: [
        {
          name: 'Bananas',
        },
        {
          name: 'Tofu',
        },
        {
          name: 'Milk',
        },
      ],
    };
  },
};
</script>

<style></style>
