import {assert} from 'chai';
import scaffold from './scaffold';

suite('scaffold', () => {
  test('that the action is scaffolded', async () => {
    assert.deepEqual(await scaffold(), {dependencies: ['@actions/core']});
  });
});
