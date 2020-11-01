export default function () {
  const actionsDocumentationLink = 'https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/'
    + 'creating-a-javascript-action';

  return {
    dependencies: ['@actions/core'],
    devDependencies: ['@vercel/ncc'],
    scripts: {build: 'ncc build index.js --license licenses.txt'},
    nextSteps: [
      {
        summary: 'Describe how to use the action in the README',
        description: `[suggestions from the actions docs](${actionsDocumentationLink}#creating-a-readme)`
      },
      {
        summary: 'Create the action metadata file',
        description: `[details from the actions docs](${actionsDocumentationLink}#creating-an-action-metadata-file)

be sure to change the \`main\` keyword in your \`action.yml\` file to use the new \`dist/index.js\` file.
\`main: 'dist/index.js'\``
      }
    ]
  };
}
