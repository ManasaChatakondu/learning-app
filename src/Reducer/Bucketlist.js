import { useState } from "react";
import uuid from 'react-uuid';
import {TiTick,TiTrash} from 'react-icons/ti';

const Header=()=>{
    return(
        <>
            <h1>My Bucket List</h1>
        </>
    )
}

const BucketList=()=>{
    const [state,setState]=useState([]);
    const [wish,setWish] =useState({
        title:"",
        by:""
    });

    const handleWish=(e)=>{
        e.preventDefault();
        const key = e.target.name
        const value = e.target.value
        setWish({...wish,[key]:value})
        console.log(wish);
    }
    const addWish=()=>{
        console.log(wish);
        //console.log(uuid());

        const updated={...wish,"id":12,"isDone":false};
        console.log(updated);
        setState([...state,updated]);

    }
    const markDone=(id)=>{
        console.log(id);
        const index= state.findIndex((wish)=>wish.id===id);
        const mockState=[...state];
        mockState[index].isDone=true;
        setState(mockState);

        //setState({...state,state[index].isDone:true})
    }

    const deleteWish=(id)=>{
        console.log(id);
        const filteredWishes= state.filter((wish)=>wish.id!==id);
        setState([...filteredWishes]);
    }

    return(
        <>
            <Header/>
            <div>
                <ul>
                    {
                        state.map((item)=>(
                            <li key={item.id}>
                                <span style={{textDecoration:item.isDone?"line-through":""}}>
                                    <strong>{item.title}</strong> is due by {item.by}
                                </span>
                                <span><TiTick size={24} onClick={markDone(item.id)}></TiTick> </span>
                                <span><TiTrash size={24} onClick={deleteWish(item.id)}></TiTrash> </span>
                            </li>
                        ))
                    }
                </ul>

                <div>
                    I want to do <input type="text" name="title" onChange={handleWish}/>by{" "}
                    <input type="date" name="by" onChange={handleWish}/>
                    <button onClick={addWish}>Make a Wish</button>
                </div>
            </div>
        </>
    );
}

export default BucketList;