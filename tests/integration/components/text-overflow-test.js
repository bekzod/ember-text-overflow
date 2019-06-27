import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('text-overflow', 'Integration | Component | text overflow', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#text-overflow}}long long long long text{{/text-overflow}}
    `);

    assert.dom('.text-overflow-container').hasText('long long long long text');
  });
});
