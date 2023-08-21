import { h, defineComponent } from 'vue';

export const DragHandle = defineComponent({
  configureCompat: {
    MODE: 3,
  },
  props: {
    tag: {
      type: String,
      default: 'span',
    },
  },
  mounted() {
    this.$el.sortableHandle = true;
  },
  render() {
    return h(this.tag, typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default);
  },
});
