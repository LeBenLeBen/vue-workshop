<template>
  <form
    action=""
    class="flex items-center p-4 mb-10 bg-white rounded shadow"
    @submit.prevent="addItem"
  >
    <label for="item" class="sr-only">{{ $t('form.name') }}</label>
    <input
      id="item"
      v-model="name"
      type="text"
      class="flex-grow border border-gray-500 rounded py-2 px-4"
      :placeholder="$t('form.name')"
    />
    <Btn type="submit" variant="primary" class="ml-3">
      {{ $t('form.add') }}
    </Btn>
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
