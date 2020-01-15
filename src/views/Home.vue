<template>
  <ul class="my-6 border-b border-gray-400">
    <li
      v-for="(list, i) in lists"
      :key="i"
      class="py-2 border-t border-gray-400"
    >
      <RouterLink
        :to="{ name: 'shopping-list', params: { id: list.id } }"
        class="block"
      >
        {{ list.label }}
        <div class="text-gray-600 text-sm">
          {{
            $tc('list.counter', list.items.length, { count: list.items.length })
          }}
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Home',

  computed: {
    lists() {
      return this.$store.state.lists;
    },
  },
};
</script>
