"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var InputData = function (props) {
    var inputColorsEl = (0, react_1.useRef)();
    var inputTimeZoneEl = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        inputColorsEl.current = document.getElementById("input-colors");
        inputTimeZoneEl.current = document.getElementById("input-time-zone");
    }, []);
    function returnColors() {
        var colorsStr = inputColorsEl.current.value;
        props.colorsFn(colorsStr.split(" "));
    }
    function returnTimeZone() {
        var zonesStr = inputTimeZoneEl.current.value;
        props.timeZoneFn(zonesStr.split(" "));
    }
    return React.createElement("div", null,
        React.createElement("input", { id: "input-colors", placeholder: "Enter colors separated by space" }),
        " ",
        React.createElement("button", { onClick: returnColors }, "GO"),
        React.createElement("input", { id: "input-time-zone", placeholder: "Enter timeZone" }),
        " ",
        React.createElement("button", { onClick: returnTimeZone }, "GO"));
};
exports.default = InputData;
