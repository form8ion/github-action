import {promises as fs} from 'fs';
import {safeLoad} from 'js-yaml';
import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then(/^the metadata file is created$/, async function () {
  assert.deepEqual(
    safeLoad(await fs.readFile(`${process.cwd()}/action.yml`, 'utf-8')),
    {
      runs:
        {
          using: 'node12',
          main: 'dist/index.js'
        }
    }
  );
});
