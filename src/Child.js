//React.Memo
import React from "react";

const Child=({count,header})=>{
    console.log('child rendering');
    return(
        <>
            <h1>I am {count} {header}</h1>
            <p>I am paragraph</p>
        </>
    );
}

export default React.memo(Child);