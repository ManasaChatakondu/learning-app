import Child from './Child';
import { useState
 } from 'react';
const Parent =()=>{
    const[count,setCount]=useState(0);

    console.log('parent rendering');
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            <Child header="header from parent" count={count}/>
        </div>
    );

}

export default Parent;