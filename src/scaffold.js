import deepmerge from 'deepmerge';
import scaffoldMetadata from './metadata';
import {ACTIONS_DOCUMENTATION_LINK} from './constants';

export default async function ({projectRoot}) {
  return deepmerge(
    {
      dependencies: ['@actions/core'],
      devDependencies: ['@vercel/ncc'],
      scripts: {build: 'ncc build index.js --license licenses.txt'},
      nextSteps: [
        {
          summary: 'Describe how to use the action in the README',
          description: `[suggestions from the actions docs](${ACTIONS_DOCUMENTATION_LINK}#creating-a-readme)`
        }
      ]
    },
    await scaffoldMetadata({projectRoot})
  );
}
