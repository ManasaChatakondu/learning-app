import uuid from 'react-uuid';


const blReducer=(state,action)=>{
    switch(action.type){
        case "ADD_WISH":{
            const newWish={...action.payload, "id":uuid(), "isDone":false};
            return [...state, newWish];
        }
        case "REMOVE_WISH":{
            const filteredWishes = state.filter((wish)=>wish.id!==action.payload);
            return [...filteredWishes];
        }
        case "DONE_WISH":{
            const index= state.findIndex((wish)=>wish.id===action.payload);
            const doneWish=[...state];
            doneWish[index].isDone=true;
            return [...doneWish];
        }
    }
}

const formReducer=(state,action)=>{
    switch(action.type){
        case "INPUT_TEXT":{
            return{
                ...state,
                [action.field]:action.payload
            };
        }
        case "TOGGLE_TEXT":{
            return{
                ...state,
                [action.payload]:!action.payload
            };
        }
    }
}
export {blReducer,formReducer};