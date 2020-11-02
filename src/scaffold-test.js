import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import {ACTIONS_DOCUMENTATION_LINK} from './constants';
import * as metadataScaffolder from './metadata';
import scaffold from './scaffold';

suite('scaffold', () => {
  const projectRoot = any.string();
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(metadataScaffolder, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the action is scaffolded', async () => {
    const metadataResults = any.simpleObject();
    metadataScaffolder.default.withArgs({projectRoot}).resolves(metadataResults);

    assert.deepEqual(
      await scaffold({projectRoot}),
      {
        dependencies: ['@actions/core'],
        devDependencies: ['@vercel/ncc'],
        scripts: {build: 'ncc build index.js --license licenses.txt'},
        nextSteps: [
          {
            summary: 'Describe how to use the action in the README',
            description: `[suggestions from the actions docs](${ACTIONS_DOCUMENTATION_LINK}#creating-a-readme)`
          }
        ],
        ...metadataResults
      }
    );
  });
});
