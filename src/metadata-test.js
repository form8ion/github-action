import {assert} from 'chai';
import any from '@travi/any';
import scaffold from './metadata';
import {ACTIONS_DOCUMENTATION_LINK} from './constants';

suite('metadata file', () => {
  const projectRoot = any.string();

  test('that the metadata file is generated', async () => {
    const {nextSteps} = await scaffold({projectRoot});

    assert.deepEqual(
      nextSteps,
      [
        {
          summary: 'Create the action metadata file',
          description: `* [details from actions docs](${ACTIONS_DOCUMENTATION_LINK}#creating-an-action-metadata-file)
* [metadata syntax](${ACTIONS_DOCUMENTATION_LINK}/metadata-syntax-for-github-actions)

be sure to change the \`main\` keyword in your \`action.yml\` file to use the new \`dist/index.js\` file.
\`main: 'dist/index.js'\``
        }
      ]
    );
  });
});
