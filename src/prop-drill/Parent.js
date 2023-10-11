import Children from './Children';


const Parent=({secret})=>{
    console.log("From Parent");

    return (
        <div className="parent">
            <h2>{`FamilyName: ${secret.familyName}`}</h2>
            <Children secret={secret}/>
        </div>
    )

}

export default Parent;