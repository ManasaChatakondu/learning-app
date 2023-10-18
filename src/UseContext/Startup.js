import Family from './Family';
import {FamilyContext} from './FamilyContext';
import '../App.css';
const familySecret={
    familyName:'Kakumani',
    onlyParensCanSee:()=>{
        return `Manasa is best`;
    },
    onlyGrandChildrenCanSee:()=>{
        return 'They are best';
    }
}

function Startup(){

    return(
        <FamilyContext.Provider value={familySecret}>
        <Family />
        </FamilyContext.Provider>
    );

};

export default Startup;