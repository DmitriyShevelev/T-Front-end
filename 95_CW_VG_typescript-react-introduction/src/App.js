"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var clock_1 = require("./clock");
var colors_1 = require("./colors");
var inputData_1 = require("./inputData");
var App = function () {
    var style = { display: "flex", flexDirection: "column" };
    var _a = React.useState([
        "red", "green", "black", "brown", "blue"
    ]), colors = _a[0], setColors = _a[1];
    var _b = React.useState("Asia/Jerusalem"), timeZone = _b[0], setTimeZone = _b[1];
    var _c = React.useState("buttons"), component = _c[0], setComponent = _c[1];
    function injectColors(colorsAr) {
        setColors(colorsAr);
    }
    function injectTimeZone(timeZoneStr) {
        setTimeZone(timeZoneStr);
    }
    var componentsMap = new Map([
        ["input", React.createElement(inputData_1.default, { colorsFn: injectColors, timeZoneFn: injectTimeZone })],
        ["colors", React.createElement(colors_1.default, { colors: colors })],
        ["timer", React.createElement(clock_1.default, { timeZone: timeZone })]
    ]);
    return React.createElement("div", { style: style },
        Array.from(componentsMap.keys()).map(function (k) { return React.createElement("button", { key: k, onClick: function () { return setComponent(k); } }, k); }),
        componentsMap.get(component));
};
exports.default = App;
