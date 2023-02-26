import * as React from "react"
import { useState } from "react";
type InputDataProps = {
    colorsFn: (colors: string[]) => void,
    timeZoneFn: (timeZone: string) => void
}
const InputData:React.FC<InputDataProps> = (props) => {
    const inputColorsEl = React.useRef<any>();
    const inputTimeZoneEl = React.useRef<any>();
    React.useEffect(()=>{
        inputColorsEl.current = document.getElementById("input-colors");
        inputTimeZoneEl.current = document.getElementById("input-time-zone");
    }, [])
    function returnColors() {
        const colorsStr:string = inputColorsEl.current.value;
        props.colorsFn(colorsStr.split(" "));

    }
    function returnTimeZone() {
        props.timeZoneFn(inputTimeZoneEl.current.value);
    }
    return <div>
        <input id="input-colors" placeholder="Enter colors separated by space"/> <button onClick={returnColors}>GO</button>
        <input id="input-time-zone" placeholder="Enter timeZone"/> <button onClick={returnTimeZone}>GO</button>
    </div>
}
export default InputData;