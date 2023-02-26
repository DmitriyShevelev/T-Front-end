import * as React from "react"
import { useState } from "react";

const Clock:React.FC<{timeZone: string}> = (props) => {
    const [date, setDate] = useState<Date>(new Date());

    const timeZone = props.timeZone;
    function tic(){
        console.log("tic")
       setDate(new Date())
    }
    
    React.useEffect(() => {
        console.log("kuku");
        const interval = setInterval(tic, 1000);
        return () => clearInterval(interval);
    },[])
    return <div>
        <h2>Date {timeZone} time-zone</h2>
        <h3>{date.toLocaleString("ru",{timeZone})}</h3>
    </div>
}
export default Clock;