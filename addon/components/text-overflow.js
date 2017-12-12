import Component from '@ember/component';
import { set } from "@ember/object"
import layout from '../templates/components/text-overflow';

export default Component.extend({
  layout,
  classNames: ['ember-text-overflow'],
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
