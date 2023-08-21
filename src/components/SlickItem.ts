import { h, defineComponent } from 'vue';
import { ElementMixin } from '../ElementMixin';

export const SlickItem = defineComponent({
  configureCompat: {
    MODE: 2,
  },
  name: 'SlickItem',
  mixins: [ElementMixin],
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render() {
    return h(this.tag, typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default);
  },
});
