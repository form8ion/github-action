import {ACTIONS_DOCUMENTATION_LINK} from './constants';

export default function () {
  return {
    nextSteps: [
      {
        summary: 'Create the action metadata file',
        description: `* [details from actions docs](${ACTIONS_DOCUMENTATION_LINK}#creating-an-action-metadata-file)
* [metadata syntax](${ACTIONS_DOCUMENTATION_LINK}/metadata-syntax-for-github-actions)

be sure to change the \`main\` keyword in your \`action.yml\` file to use the new \`dist/index.js\` file.
\`main: 'dist/index.js'\``
      }
    ]
  };
}
