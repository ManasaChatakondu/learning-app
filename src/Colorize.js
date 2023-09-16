import { useState } from "react";

const Colorizer = ()=>{
    const[color,setColor] = useState('red');
    //const [count,setCount]= useState(1);
    const [count,setCount]= useState(Math.random());

    const changeColor = ()=>{
        console.log('color change');
        setColor('green');
    }
    const incrementCounter = ()=>{
        //setCount((prev)=>prev+3);
        //setCount(count+3);
        //setCount(Math.random());
    }

    return(
        <div className="colorizer">
            <div className="box"
                    style={{backgroundColor:color}}>{color}</div>

            <button onClick = {changeColor}> Change Color</button>

            <div className="counter"
                    >{count}</div>
            <button onClick = {incrementCounter}> click me</button>


        </div>
    );
};

export default Colorizer;