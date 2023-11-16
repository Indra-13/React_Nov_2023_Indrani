import React, { useState } from "react";

function Toggle()
{
    const [name,setName]=useState("Indhu");
    const[count,setCount]=useState(0);

    const Transform = () =>
    {
        let v=count;
        setCount(++v);
        if(v === 3) {
            if(name === "Indhu")
                setName("Sri");
            else
                setName("Indhu");
        }
    };
    return (
        <div>
            <h2>Toggle</h2><hr></hr>
            <h2>{name}</h2>
            <button onClick={Transform}>change</button>
        </div>
    )
}
export default Toggle;