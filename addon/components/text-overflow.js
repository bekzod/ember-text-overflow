import Component from '@ember/component';
import { set } from "@ember/object"
import layout from '../templates/components/text-overflow';

export default class TextOverflow extends Component {

  init() {
    super.init(...arguments);
    this.set('layout', layout);
    this.set('isOverlayVisible', false);
    this.set('classNames', ['ember-text-overflow']);
  }

  mouseEnter() {
    let { element } = this;
    let containerWidth = element.offsetWidth;
    let overlayWidth = element.querySelector('.text-overflow-overlay').offsetWidth;
    set(this, 'isOverlayVisible', overlayWidth > containerWidth);
    super.mouseEnter(...arguments);
  }

  mouseLeave() {
    set(this, 'isOverlayVisible', false);
    super.mouseLeave(...arguments);
  }

}
