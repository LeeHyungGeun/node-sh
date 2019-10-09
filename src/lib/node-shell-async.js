const cmd = require('node-cmd');
export class NodeShell {
  date() {
    return new Promise((resolve, reject) => {
      cmd.get('date', (err, data, stderr) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }
  cal() {
    return new Promise((resolve, reject) => {
      cmd.get('cal', (err, data, stderr) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }
}

export default NodeShell;
module.exports = NodeShell;