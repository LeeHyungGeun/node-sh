import cmd from 'node-cmd';
export class NodeCmdPromise {
  get(_cmd) {
    return new Promise((resolve, reject) => {
      cmd.get(_cmd, (err, data, stderr) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }
}

export default NodeCmdPromise;
module.exports = NodeCmdPromise;