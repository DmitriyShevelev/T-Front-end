"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var Clock = function (props) {
    var _a = (0, react_1.useState)(new Date()), date = _a[0], setDate = _a[1];
    var timeZone = props.timeZone;
    function tic() {
        console.log("tic");
        setDate(new Date());
    }
    React.useEffect(function () {
        console.log("kuku");
        var interval = setInterval(tic, 1000);
        return function () { return clearInterval(interval); };
    }, []);
    return React.createElement("div", null,
        React.createElement("h2", null,
            "Date ",
            timeZone,
            " time-zone"),
        React.createElement("h3", null, date.toLocaleString("ru", { timeZone: timeZone })));
};
exports.default = Clock;
