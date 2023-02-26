import * as React from "react";
import Clock from "./clock";
import Colors from "./colors";
import InputData from "./inputData";
type Components = "buttons"|"colors"|"timer"|"input";
const App: React.FC = () => {
    const style: React.CSSProperties = {display: "flex", flexDirection: "column"}
    const [colors, setColors] = React.useState<string[]>([
        "red", "green", "black", "brown", "blue"
    ]);
    const [timeZone, setTimeZone] = React.useState<string>("Asia/Jerusalem");
    const [component, setComponent] = React.useState<Components>("buttons");
    function injectColors(colorsAr: string[]) {
        setColors(colorsAr);
    }
    function injectTimeZone(timeZoneStr: string) {
        setTimeZone(timeZoneStr);
    }
    const componentsMap = new Map<Components, React.ReactNode>([
        ["input",<InputData colorsFn={injectColors} timeZoneFn={injectTimeZone} ></InputData> ],
        ["colors", <Colors colors={colors}></Colors>],
        ["timer",<Clock timeZone={timeZone}></Clock>]
    ])
    return <div style={style}>
        {Array.from(componentsMap.keys()).map(k => <button key = {k} onClick={() => setComponent(k)}>{k}</button>)}
        {componentsMap.get(component)}
       
    </div>
}
export default App;