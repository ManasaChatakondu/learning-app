//useref
import { useEffect, useState,useRef } from "react";

const CountRef=()=>{
    const countRef=useRef(0);
    const [searchTerm,setSearcTerm]=useState('');

    useEffect(()=>{
        countRef.current=countRef.current+1;
    },[]);


    return(
        <>
            <input type="text"
                value={searchTerm}
                onChange={(e)=>setSearcTerm(e.target.value)}/>
            {countRef.current}
        </>
    );
}

export default CountRef;