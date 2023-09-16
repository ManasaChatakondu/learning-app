//For Custom hook
import { useState } from "react";
import GithubUser from "./Githubuser";

const FindUser=()=>{
    const[userName,setUserName]=useState(null);

    return(
        <div className="find-user">
            <h1>Find User</h1>
            
            <form>
                <div classNmae="form-group">
                    <label>UserName:</label>
                    <input type="text" placeholder="Enter username" onChange={(e)=>setUserName(e.target.value)}/>
                </div>
            </form>

        <div className="result"> 
            {
            userName
                ?<GithubUser userName={userName}/>
                :<p>Please initiate a search!</p>
            }
        </div> 

        </div>
    );
}

export default FindUser;