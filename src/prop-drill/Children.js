
const Children=({secret})=>{
    console.log("From Children");

    return (
        <div className="children">
            <h2>{`FamilyName: ${secret.familyName}`}</h2>
            <h3>{secret.onlyParensCanSee()}</h3>
        </div>
    )

}

export default Children;