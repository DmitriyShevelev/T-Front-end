"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Colors = function (props) {
    var colors = props.colors;
    return React.createElement("div", null,
        React.createElement("ul", null, colors.map(function (r, index) { return React.createElement("li", { key: index, style: { color: r } }, r); })));
};
exports.default = Colors;
