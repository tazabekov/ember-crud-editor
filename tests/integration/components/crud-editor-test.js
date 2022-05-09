import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | crud-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CrudEditor />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <CrudEditor>
        template block text
      </CrudEditor>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
