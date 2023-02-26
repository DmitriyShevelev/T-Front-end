import * as React from "react";
import Clock from "./clock";
import Colors from "./colors";
import InputData from "./inputData";
const App: React.FC = () => {
    const style: React.CSSProperties = {display: "flex", flexDirection: "column"}
    const [colors, setColors] = React.useState<string[]>([
        "red", "green", "black", "brown", "blue"
    ]);
    const [timeZone, setTimeZone] = React.useState<string>("Asia/Jerusalem");
    function injectColors(colorsAr: string[]) {
        setColors(colorsAr);
    }
    function injectTimeZone(timeZoneStr: string) {
        setTimeZone(timeZoneStr);
    }
    return <div style={style}>
        <InputData colorsFn={injectColors} timeZoneFn={injectTimeZone} ></InputData>
        <Colors colors={colors}></Colors>
        <Clock timeZone={timeZone}></Clock>
    </div>
}
export default App;