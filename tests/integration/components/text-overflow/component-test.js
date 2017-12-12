import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('text-overflow', 'Integration | Component | text overflow', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  this.render(hbs`
    <div stype="width: 30px;" >{{#text-overflow}}Long long long long long long text{{/text-overflow}}</div>
  `);

  assert.equal(this.$().text().trim(), 'Long long long long long long text');
});
