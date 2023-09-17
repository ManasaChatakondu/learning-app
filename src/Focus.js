//useref
import { useRef,useEffect } from "react";

const Focus = () =>{

    const inputelemRef = useRef();

    useEffect(()=>{
        inputelemRef.current.focus();
        inputelemRef.current.style.backgroundColor='red';
    },[]);

    return(
        <>
            <input type="text" ref={inputelemRef}></input>
        </>
        
    );
};

export default Focus;