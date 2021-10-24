import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | user status', function (hooks) {
  setupApplicationTest(hooks);

  test('Should update the status on button clicks', async function (assert) {
    await visit('/user-status');
    assert.equal(currentURL(), '/user-status');

    assert
      .dom('[data-test-text="status"]')
      .hasText('I am idle', 'The user sees the correct status.');

    assert
      .dom('[data-test-button="update-status"]')
      .hasText(
        'Change status to ‘Doing a task’',
        'The user sees the correct button text.'
      );

    await click('[data-test-button="update-status"]');

    assert
      .dom('[data-test-text="status"]')
      .hasText('I am doing a task', 'The user sees the correct status.');

    assert
      .dom('[data-test-button="update-status"]')
      .hasText(
        'Change status to ‘Idle’',
        'The user sees the correct button text.'
      );

    // OOO button
    assert
      .dom('[data-test-button="ooo"]')
      .hasText(
        'Mark yourself as OOO',
        'The user sees the correct text for OOO button.'
      );

    await click('[data-test-button="ooo"]');

    assert
      .dom('[data-test-text="status"]')
      .hasText('I am OOO', 'The user sees the correct status.');

    assert
      .dom('[data-test-button="ooo"]')
      .hasText(
        'Mark yourself as Active again',
        'The user sees the correct button text.'
      );
  });
});
