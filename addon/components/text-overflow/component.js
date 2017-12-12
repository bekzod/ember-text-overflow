import Component from '@ember/component';
import { set } from "@ember/object"
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['text-overflow'],
  isOverlayVisible: false,

  mouseEnter() {
    let containerWidth = this.$().width();
    let overlayWidth = this.$('.text-overflow-overlay').width();
    set(this, 'isOverlayVisible', overlayWidth > containerWidth);
    this._super(...arguments);
  },

  mouseLeave() {
    set(this, 'isOverlayVisible', false);
    this._super(...arguments);
  }

});
