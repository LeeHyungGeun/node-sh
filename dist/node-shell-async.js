(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('child_process')) :
  typeof define === 'function' && define.amd ? define(['exports', 'child_process'], factory) :
  (global = global || self, factory(global.nodeShellAsync = {}, global.child_process));
}(this, function (exports, child_process) { 'use strict';

  child_process = child_process && child_process.hasOwnProperty('default') ? child_process['default'] : child_process;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var exec = child_process.exec;
  var commandline = {
    get: getString,
    run: runCommand
  };

  function runCommand(command) {
    //return refrence to the child process
    return exec(command);
  }

  function getString(command, callback) {
    //return refrence to the child process
    return exec(command, function () {
      return function (err, data, stderr) {
        if (!callback) return;
        callback(err, data, stderr);
      };
    }());
  }

  var cmd = commandline;

  var NodeCmdPromise =
  /*#__PURE__*/
  function () {
    function NodeCmdPromise() {
      classCallCheck(this, NodeCmdPromise);
    }

    createClass(NodeCmdPromise, [{
      key: "get",
      value: function get(_cmd) {
        return new Promise(function (resolve, reject) {
          cmd.get(_cmd, function (err, data, stderr) {
            if (err) {
              reject(err);
            }

            resolve(data);
          });
        });
      }
    }]);

    return NodeCmdPromise;
  }();
  module.exports = NodeCmdPromise;

  var cmd$1 = new NodeCmdPromise();
  var NodeShell =
  /*#__PURE__*/
  function () {
    function NodeShell() {
      classCallCheck(this, NodeShell);
    }

    createClass(NodeShell, [{
      key: "date",
      value: function date() {
        return cmd$1.get('date');
      }
    }, {
      key: "cal",
      value: function cal() {
        return cmd$1.get('cal');
      }
    }, {
      key: "df",
      value: function df() {
        return cmd$1.get('df');
      }
    }, {
      key: "pwd",
      value: function pwd() {
        return cmd$1.get('pwd');
      }
    }, {
      key: "ls",
      value: function ls() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return cmd$1.get("ls ".concat(options));
      }
    }, {
      key: "file",
      value: function file(filepath) {
        return cmd$1.get("file ".concat(filepath));
      }
    }, {
      key: "less",
      value: function less(filepath) {
        return cmd$1.get("less ".concat(filepath));
      }
    }, {
      key: "cp",
      value: function cp(from, to) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        return cmd$1.get("cp ".concat(from, " ").concat(to, " ").concat(options));
      }
    }]);

    return NodeShell;
  }();
  module.exports = NodeShell;

  exports.NodeShell = NodeShell;
  exports.default = NodeShell;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=node-shell-async.js.map
