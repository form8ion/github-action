import {promises as fs} from 'fs';
import {safeDump} from 'js-yaml';
import {ACTIONS_DOCUMENTATION_LINK} from './constants';

export default async function ({projectRoot}) {
  await fs.writeFile(
    `${projectRoot}/action.yml`,
    safeDump({
      runs:
        {
          using: 'node12',
          main: 'dist/index.js'
        }
    })
  );

  return {
    nextSteps: [
      {
        summary: 'Populate the details of the action metadata file',
        description: `* [details from actions docs](${ACTIONS_DOCUMENTATION_LINK}#creating-an-action-metadata-file)
* [metadata syntax](${ACTIONS_DOCUMENTATION_LINK}/metadata-syntax-for-github-actions)`
      }
    ]
  };
}
