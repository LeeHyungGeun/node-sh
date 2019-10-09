import NodeCmdPromise from './node-cmd-promise';
const cmd = new NodeCmdPromise();

export class NodeShell {
  date() {
    return cmd.get('date');
  }
  cal() {
    return cmd.get('cal');
  }
  df() {
    return cmd.get('df');
  }
  pwd() {
    return cmd.get('pwd');
  }
  ls(options = '') {
    return cmd.get(`ls ${options}`);
  }
  file(filepath) {
    return cmd.get(`file ${filepath}`);
  }
  less(filepath) {
    return cmd.get(`less ${filepath}`);
  }
  cp(from, to, options = '') {
    return cmd.get(`cp ${from} ${to} ${options}`);
  }
}

export default NodeShell;
module.exports = NodeShell;