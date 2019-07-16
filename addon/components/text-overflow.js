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
    let el = element.querySelector('.text-overflow-container');
    set(this, 'isOverlayVisible', el.offsetWidth < el.scrollWidth);
  }

  mouseLeave() {
    set(this, 'isOverlayVisible', false);
  }

}
