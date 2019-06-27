define(['exports', 'react'], function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var HelloWorld = function HelloWorld(props) {
        return _react2.default.createElement(
            'div',
            null,
            'Hello ',
            props.name
        );
    };

    HelloWorld.defaultProps = {
        name: 'World'
    };

    exports.default = HelloWorld;
});
//# sourceMappingURL=HelloWorld.js.map
