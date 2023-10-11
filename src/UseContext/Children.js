import { FamilyContext } from '../UseContext/FamilyContext';    
import {useContext} from 'react';

const Children=()=>{
    console.log("From Children");
    const secret=useContext(FamilyContext);
    return (
        <div className="children">
            <h2>{`FamilyName: ${secret.familyName}`}</h2>
            <h3>{secret.onlyParensCanSee()}</h3>
        </div>
    )

}

export default Children;