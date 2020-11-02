import {assert} from 'chai';
import {ACTIONS_DOCUMENTATION_LINK} from './constants';

suite('constants', () => {
  test('that the documentation link matches the proper url', () => {
    assert.equal(
      ACTIONS_DOCUMENTATION_LINK,
      'https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action'
    );
  });
});
