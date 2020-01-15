<template>
  <div>
    <AddItemForm @add="item => items.push(item)" />

    <template v-if="items.length">
      <div
        class="flex justify-between items-center text-gray-600 tracking-wide text-sm uppercase"
      >
        {{ $tc('list.counter', items.length, { count: items.length }) }}

        <Btn
          variant="link"
          :disabled="!boughtItemsLength"
          @click="clearBoughtItems"
        >
          {{ $t('list.clear') }}
        </Btn>
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
    </template>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';
import AddItemForm from '@/components/AddItemForm';

export default {
  name: 'App',

  components: {
    ListItem,
    AddItemForm,
  },

  data() {
    return {
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
    boughtItemsLength() {
      return this.items.filter(item => item.bought).length;
    },
  },

  methods: {
    clearBoughtItems() {
      this.items = this.items.filter(item => !item.bought);
    },
  },
};
</script>
