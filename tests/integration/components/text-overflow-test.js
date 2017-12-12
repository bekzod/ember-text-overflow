import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('text-overflow', 'Integration | Component | text overflow', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#text-overflow}}long long long long text{{/text-overflow}}
  `);

  assert.equal(this.$('.text-overflow-container').text().trim(), 'long long long long text');
});
