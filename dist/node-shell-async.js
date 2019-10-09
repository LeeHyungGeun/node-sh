(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.nodeShellAsync = {}));
}(this, function (exports) { 'use strict';

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

  var cmd = require('node-cmd');

  var NodeShell =
  /*#__PURE__*/
  function () {
    function NodeShell() {
      classCallCheck(this, NodeShell);
    }

    createClass(NodeShell, [{
      key: "date",
      value: function date() {
        return new Promise(function (resolve, reject) {
          cmd.get('date', function (err, data, stderr) {
            if (err) {
              reject(err);
            }

            resolve(data);
          });
        });
      }
    }, {
      key: "cal",
      value: function cal() {
        return new Promise(function (resolve, reject) {
          cmd.get('cal', function (err, data, stderr) {
            if (err) {
              reject(err);
            }

            resolve(data);
          });
        });
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
