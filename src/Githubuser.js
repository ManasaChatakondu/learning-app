import { useEffect, useState } from "react";


const GithubUser=({userName})=>{
    const[user,setuser]=useState(null);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);

    
    useEffect(()=>{
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
        fetchData();
    },[userName]);

    return(
        <div className="github-user">
            {loading&& <p>Loading please wait...</p>}
            {error && <p>error.message</p>}
            {user&&
                <ul>
                    <p>{user.login}</p>
                    <p>{user.public_repos}</p>
                </ul>}
        </div>
    );
}

export default GithubUser;