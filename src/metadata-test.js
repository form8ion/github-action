import {promises as fs} from 'fs';
import jsYaml from 'js-yaml';
import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import scaffold from './metadata';
import {ACTIONS_DOCUMENTATION_LINK} from './constants';

suite('metadata file', () => {
  let sandbox;
  const projectRoot = any.string();

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fs, 'writeFile');
    sandbox.stub(jsYaml, 'safeDump');
  });

  teardown(() => sandbox.restore());

  test('that the metadata file is generated', async () => {
    const dumpedContent = any.string();
    jsYaml.safeDump
      .withArgs({
        runs:
          {
            using: 'node12',
            main: 'dist/index.js'
          }
      })
      .returns(dumpedContent);

    const {nextSteps} = await scaffold({projectRoot});

    assert.calledWith(fs.writeFile, `${projectRoot}/action.yml`, dumpedContent);
    assert.deepEqual(
      nextSteps,
      [
        {
          summary: 'Populate the details of the action metadata file',
          description: `* [details from actions docs](${ACTIONS_DOCUMENTATION_LINK}#creating-an-action-metadata-file)
* [metadata syntax](${ACTIONS_DOCUMENTATION_LINK}/metadata-syntax-for-github-actions)`
        }
      ]
    );
  });
});
