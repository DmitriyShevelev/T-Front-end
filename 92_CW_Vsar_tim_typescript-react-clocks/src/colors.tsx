import * as React from "react";
type ColorsProps =  {
    colors: string[]
}
const Colors: React.FC<ColorsProps> = (props: ColorsProps) => {
    const {colors} = props;
    return <div>
        <ul>
            {colors.map((r, index) => <li key={index} style={{color:r, backgroundColor: "black"}}>{r}</li>)}
        </ul>
    </div>
}
export default Colors;