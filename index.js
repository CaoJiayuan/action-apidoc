const core = require('@actions/core');
const github = require('@actions/github');
const path = require( 'path')
const createDoc = require('apidoc').createDoc

try {
  const input = core.getInput('input');
  const output = core.getInput('output');

  const src = path.resolve(input)
  const dest = path.resolve(output)
  console.log(`generting apidoc input:${src} output:${dest}`)
  const doc = createDoc({
    src: src,
    dest: dest
  })

  if (typeof doc !== 'boolean') {
    // Documentation was generated!
    console.log('Documentation was generated!')
  }
} catch (error) {
  console.log(`generte apidoc error`)
  core.setFailed(error.message);
}