import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-status', function (hooks) {
  setupRenderingTest(hooks);

  test('Should show I am doing a task', async function (assert) {
    await render(hbs`
      <user-status />
    `);

    assert
      .dom('[data-test-status]')
      .hasText('I am idle', 'The user sees the correct status.');

    assert
      .dom('[data-test-button-text]')
      .hasText(
        'Change status to ‘Doing a task’',
        'The user sees the correct button text.'
      );

    await click('[data-test-button]');

    assert
      .dom('[data-test-status]')
      .hasText('I am doing a task', 'The user sees the correct status.');

    assert
      .dom('[data-test-button-text]')
      .hasText(
        'Change status to ‘Idle’',
        'The user sees the correct button text.'
      );
  });
});
