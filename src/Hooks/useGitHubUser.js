import { useEffect, useState } from "react";

const useGithub = (userName)=>{
    const[user,setuser]=useState(null);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);

    const fetchData=async()=>{
        setLoading(true);
        console.log(userName);
        try{
            console.log(`https://api.github.com/users/${userName}`);
            const response= await fetch(`https://api.github.com/users/${userName}`);
            const responseData= await response.json();
            setLoading(false);
            setuser(responseData);
        }
        catch(error){
            setError(error);
            setLoading(false);
        }
    }
    useEffect(()=>{
        
        fetchData();
    },[userName]);

    return {user,error,loading};
}

export default useGithub;