const { exec } = require('child_process');

const adjustBandwidth = (req, res) => {
  const { ip, bandwidth, action } = req.body;

  let scriptName = '';
  if (action === 'increase') {
    scriptName = 'increase_bandwidth.sh';
  } else if (action === 'decrease') {
    scriptName = 'decrease_bandwidth.sh';
  } else {
    return res.status(400).json({ error: 'Invalid action' });
  }

  exec(`sh ./${scriptName} ${ip} ${bandwidth}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing shell script: ${error}`);
      return res.status(500).json({ error: 'An error occurred while adjusting bandwidth' });
    }

    console.log(`Shell script output: ${stdout}`);
    console.error(`Shell script error: ${stderr}`);

    res.status(200).json({ message: 'Bandwidth adjusted successfully' });
  });
};

module.exports = {
  adjustBandwidth,
};
