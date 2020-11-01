import {assert} from 'chai';
import scaffold from './scaffold';

suite('scaffold', () => {
  test('that the action is scaffolded', async () => {
    const actionsDocumentationLink = 'https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/'
      + 'creating-a-javascript-action';

    assert.deepEqual(
      await scaffold(),
      {
        dependencies: ['@actions/core'],
        nextSteps: [
          {
            summary: 'Describe how to use the action in the README',
            description: `[suggestions from the actions docs](${actionsDocumentationLink}#creating-a-readme)`
          },
          {
            summary: 'Create the action metadata file',
            description: `[details from the actions docs](${actionsDocumentationLink}#creating-an-action-metadata-file)`
          }
        ]
      }
    );
  });
});
