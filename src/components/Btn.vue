<template>
  <component
    :is="tag"
    class="inline-block"
    :class="classNames"
    v-bind="attributes"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Btn',

  inheritAttrs: false,

  props: {
    /**
     * The HTML tag used for the button.
     */
    tag: {
      type: String,
      default: 'button',
    },
    /**
     * The `type` attribute for input and button tags
     */
    type: {
      type: String,
      default: 'button',
    },
    /**
     * The style of the button:
     * `default, primary, bare`
     */
    variant: {
      type: String,
      default: null,
    },
    /**
     * Make the button takes 100% of the parent width
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Set the disable attribute and add the `disabledClass` to the button
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * The class applied to disabled buttons
     */
    disabledClass: {
      type: String,
      default: 'cursor-not-allowed opacity-50',
    },
  },

  computed: {
    attributes() {
      return Object.assign(
        {},
        {
          // Set disabled attribute only on button/input tags
          ...(this.disabled &&
            ['input', 'button'].includes(this.tag) && { disabled: true }),
          // Set type attribute only on button/input tags and defaults to `button`
          ...(this.type &&
            ['input', 'button'].includes(this.tag) && { type: this.type }),
        },
        this.$attrs
      );
    },

    classNames() {
      const classes = [
        'btn',
        { 'block w-full': this.block },
        { [this.disabledClass]: this.disabled },
      ];

      switch (this.variant) {
        case 'primary':
          classes.push('py-2 px-4 text-white bg-blue-600 rounded');

          if (!this.disabled) {
            classes.push('hover:bg-blue-500 focus:bg-blue-500');
          }
          break;
        case 'link':
          classes.push('text-blue-600');

          if (!this.disabled) {
            classes.push('hover:text-blue-800 focus:text-blue-800');
          }
          break;
      }

      return classes;
    },
  },
};
</script>
