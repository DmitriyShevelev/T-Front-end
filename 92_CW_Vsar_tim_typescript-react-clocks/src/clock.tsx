import * as React from "react"
import {useRef, useState} from "react";
import timeZones from "./time-zones";

function  getTimeZone (tzFoSearch: string){
    let name:string
    timeZones.forEach(params=>{
        if(searchStringInArray(tzFoSearch, Object.values(params).map(e=> e.toString())) > -1){
            name =  params.name;
        }

    })

    return name || Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function searchStringInArray (str: string, strArray: any) {
    for (let j=0; j<strArray.length; j++) {
            if (strArray[j].toLowerCase().includes(str.toLowerCase())) return j;
    }
    return -1;
}
const Clock:React.FC<{timeZone: string}> = (props) => {

    let timeZone = useRef<string>(
       ""
    );
    const [date, setDate] = useState<Date>(new Date());
    function tic(){
        // console.log("tic")
       setDate(new Date())
    }

    React.useEffect(() => {
        timeZone.current = getTimeZone(props.timeZone);
        setDate(new Date())
        const interval = setInterval(tic, 1000);
        return () => clearInterval(interval);
    },[props.timeZone])
    return <div>
        <h2>Date {timeZone.current} time-zone</h2>
        <h3> {timeZone.current ?  date.toLocaleString("ru",{timeZone: timeZone.current} ): ""}</h3>
    </div>
}
export default Clock;
