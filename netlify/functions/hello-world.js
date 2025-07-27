const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.handler = async () => {
  try {
    const { stdout, stderr } = await exec('ls -l');
    console.log('Output:', stdout);
    if (stderr) {
      console.error('Error output:', stderr);
    }
  } catch (err) {
    console.error('Execution failed:', err);
  }

  return {
    statusCode: 200,
    body: `stdout:
      ${stdout}
      stderr:
      ${stderr}
    `
  };
};
