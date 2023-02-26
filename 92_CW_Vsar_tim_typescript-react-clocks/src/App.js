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
    var _b = React.useState(["Asia/Jerusalem"]), timeZones = _b[0], setTimeZone = _b[1];
    function injectColors(colorsAr) {
        setColors(colorsAr);
    }
    function injectTimeZone(timeZoneAr) {
        setTimeZone(timeZoneAr);
    }
    return React.createElement("div", { style: style },
        React.createElement(inputData_1.default, { colorsFn: injectColors, timeZoneFn: injectTimeZone }),
        React.createElement(colors_1.default, { colors: colors }),
        timeZones.map(function (t, index) { return React.createElement(clock_1.default, { key: index, timeZone: t }); }));
};
exports.default = App;
