import {useState,useEffect} from "react";

const GreetingBox=({getGreeting})=>{
    const[greeting,setGreeting]=useState();

    useEffect(()=>{
        setGreeting(getGreeting);
        console.log("GreetingBox:UseEffect");
    },[getGreeting]);

    return(

        <p>From Callback saying: {greeting} </p>
    );
};

export default GreetingBox;