import React, { FC, ReactNode } from "react";
import {lifeGameConfig} from "../configuration/life-config"
const BORDER_SIZE = 1;
function getCellSize(): number {
    return Math.min(window.innerHeight, window.innerWidth) / lifeGameConfig.dimension - BORDER_SIZE * 2
}
function getStyle(num: number):React.CSSProperties {
    const size = getCellSize();
    return {
        backgroundColor: !!num ? "black" : "white",
        width: size,
        height: size,
        border: `${BORDER_SIZE}px solid gray`
    }
}
const Row: FC<{ row: number[] }> = (props) => {
    const row = props.row;

    
    function getCells(): ReactNode[] {
        return row.map((n, index) => <div key={index} style={getStyle(n)}></div>)
    }
    return <div style={{display: "flex"}}>
        {getCells()}
    </div>;
}
export default Row;