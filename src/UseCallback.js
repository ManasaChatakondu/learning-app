import {useState, useCallback,useMemo} from "react";
import GreetingBox from './GreetingBox';

const UseCallbackExample = () =>{

    const[name,setName]=useState('');
    const[count,setCount]=useState(0);

    const getGreeting=useMemo(()=>{
        return `Hello ${name}`;
    },[name]);

    return(

        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name here"/>

            <GreetingBox getGreeting={getGreeting}/>
            <button type="button" onClick={()=>setCount(count+1)}>Click Me</button> <p>{count}clicks happened</p>
        </div>

    );
    
}


export default UseCallbackExample;