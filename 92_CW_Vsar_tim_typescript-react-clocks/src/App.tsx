import * as React from "react";
import Clock from "./clock";
import Colors from "./colors";
import InputData from "./inputData";
const App: React.FC = () => {
    const style: React.CSSProperties = {display: "flex", flexDirection: "column"}
    const [colors, setColors] = React.useState<string[]>([
        "red", "green", "black", "brown", "blue"
    ]);
    const [timeZones, setTimeZone] = React.useState<string[]>(["Asia/Jerusalem"]);
    function injectColors(colorsAr: string[]) {
        setColors(colorsAr);
    }
    function injectTimeZone(timeZoneAr: string[]) {
        setTimeZone(timeZoneAr);
    }
    return <div style={style}>
        <InputData colorsFn={injectColors} timeZoneFn={injectTimeZone} />
        <Colors colors={colors}/>
        {timeZones.map((t, index) => <Clock key={index} timeZone={t} />)}
    </div>
}
export default App;
