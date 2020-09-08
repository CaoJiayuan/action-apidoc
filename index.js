const core = require('@actions/core');
const github = require('@actions/github');
const path = require( 'path')
const createDoc = require('apidoc').createDoc

try {
  const input = core.getInput('input');
  const output = core.getInput('output');

  const src = path.resolve(__dirname, input)
  const dest = path.resolve(__dirname, output)
  console.log(`generte apidoc input:${src} output:${desc}`)
  const doc = createDoc({
    src: src,
    dest: dest
  })

  if (typeof doc !== 'boolean') {
    // Documentation was generated!
    console.log(doc.data) // `api_data.json` file content
    console.log(doc.project) // `api_project.json` file content
  }
} catch (error) {
  console.log(`generte apidoc error`)
  core.setFailed(error.message);
}