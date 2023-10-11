import Family from './Family';
//import './src/App.css';
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
        <Family secret={familySecret}/>
    );

};

export default Startup;