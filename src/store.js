import Vue from 'vue';

export default Vue.observable({
  state: {
    lists: {
      'farmers-market': {
        id: 'farmers-market',
        label: 'Farmers Market',
        items: [
          {
            name: 'Bread',
            bought: false,
          },
          {
            name: 'Eggs',
            bought: false,
          },
        ],
      },
      'hardware-store': {
        id: 'hardware-store',
        label: 'Hardware Store',
        items: [
          {
            name: 'Cardboxes',
            bought: false,
          },
          {
            name: 'Bolts',
            bought: false,
          },
          {
            name: 'Plant soil',
            bought: true,
          },
        ],
      },
      supermarket: {
        id: 'supermarket',
        label: 'Supermarket',
        items: [],
      },
    },
  },
});
