import {useState,useEffect} from "react";

const ShowUsers=()=>{
    const [users,setUsers]=useState([]);
    const[isLoading,setLoading] =useState(true);

    useEffect(()=>{

        fetch('https://json-faker.onrender.com/movies')
        .then((response)=>response.json())
        .then((data)=>setUsers(data.movies),setLoading(false))
        .catch((error)=>(console.error(error)))
     },[isLoading])

     const refresh = ()=>{
        setLoading(true)
     }


    return(
        <>
        {isLoading?<p>Loading Users</p>:(
        <div>
            <button onClick={refresh}>Refresh</button>
            <h2> Users:</h2>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>{user.title}</li>
                    ))
                }
            </ul>
       
        </div>)}
        </>
        );
};

export default ShowUsers;