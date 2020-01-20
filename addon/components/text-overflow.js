import Component from '@ember/component';
import { set } from "@ember/object"
import layout from '../templates/components/text-overflow';
import { action } from '@ember/object';

export default class TextOverflow extends Component {

  init() {
    super.init(...arguments);
    this.set('layout', layout);
    this.set('isOverlayVisible', false);
    this.set('classNames', ['ember-text-overflow']);
  }

  didInsertElement() {
    super.didInsertElement(...arguments);
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }

  willDestroyElement() {
    super.willDestroyElement(...arguments);
    this.element.removeEventListener('mouseenter', this.handleMouseEnter);
    this.element.removeEventListener('mouseleave', this.handleMouseLeave);
  }

  @action
  handleMouseEnter() {
    let el = this.element.querySelector('.text-overflow-container');
    set(this, 'isOverlayVisible', el.offsetWidth < el.scrollWidth);
  }

  @action
  handleMouseLeave() {
    set(this, 'isOverlayVisible', false);
  }

}
