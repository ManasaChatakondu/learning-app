import { useReducer } from "react";
import {TiTick,TiTrash} from 'react-icons/ti';
import {blReducer,formReducer} from './BucketListReducers';

const Header=()=>{
    return(
        <>
            <h1>My Bucket List</h1>
        </>
    )
}

const BucketListWithReducer=()=>{
    const [state,dispatch]=useReducer(blReducer,[]);
    const [wish,dispatchFromAction] =useReducer(formReducer,{
        title:"",
        by:""
    });

    const handleWish=(e)=>{
        e.preventDefault();

        dispatchFromAction({
            type: "INPUT_TEXT",
            field: e.target.Name,
            payload:e.target.value
        })
    }

    return(
        <>
            <Header/>
            <div>
                <ul>
                    {
                        state && state.length>0 && state.map((item)=>(
                            <li key={item.id}>
                                <span style={{textDecoration:item.isDone?"line-through":""}}>
                                    <strong>{item.title}</strong> is due by {item.by}
                                </span>
                                <span><TiTick size={24} onClick={id=>dispatch({type:"DONE_WISH",payload:item.id})}></TiTick> </span>
                                <span><TiTrash size={24} onClick={id=>dispatch({type:"REMOVE_WISH",payload:item.id})}></TiTrash> </span>
                            </li>
                        ))
                    }
                </ul>

                <div>
                    I want to do <input type="text" name="title" onChange={(e)=>handleWish(e)}/>by{" "}
                    <input type="date" name="by" onChange={(e)=>handleWish(e)}/>
                    <button onClick={(wish)=>dispatch({type:"ADD_WISH",payload:wish})}> Make a Wish</button>
                </div>
            </div>
        </>
    );
}

export default BucketListWithReducer;