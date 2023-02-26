"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var time_zones_1 = require("./time-zones");
function getTimeZone(tzFoSearch) {
    var name;
    time_zones_1.default.forEach(function (params) {
        if (searchStringInArray(tzFoSearch, Object.values(params).map(function (e) { return e.toString(); })) > -1) {
            name = params.name;
        }
    });
    return name || Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function searchStringInArray(str, strArray) {
    for (var j = 0; j < strArray.length; j++) {
        if (strArray[j].toLowerCase().includes(str.toLowerCase()))
            return j;
    }
    return -1;
}
var Clock = function (props) {
    var timeZone = (0, react_1.useRef)("");
    var _a = (0, react_1.useState)(new Date()), date = _a[0], setDate = _a[1];
    function tic() {
        // console.log("tic")
        setDate(new Date());
    }
    React.useEffect(function () {
        timeZone.current = getTimeZone(props.timeZone);
        setDate(new Date());
        var interval = setInterval(tic, 1000);
        return function () { return clearInterval(interval); };
    }, [props.timeZone]);
    return React.createElement("div", null,
        React.createElement("h2", null,
            "Date ",
            timeZone.current,
            " time-zone"),
        React.createElement("h3", null,
            " ",
            timeZone.current ? date.toLocaleString("ru", { timeZone: timeZone.current }) : ""));
};
exports.default = Clock;
