import Children from './Children';
import { FamilyContext } from '../UseContext/FamilyContext';    
import {useContext} from 'react';

const Parent=()=>{
    console.log("From Parent");
    const secret=useContext(FamilyContext);
    return (
        <div className="parent">
            <h2>{`FamilyName: ${secret.familyName}`}</h2>
            <Children/>
        </div>
    )

}

export default Parent;