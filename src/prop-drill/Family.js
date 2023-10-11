import Parent from './Parent';


const Family=({secret})=>{
    //console.log("From Family");

    return (
        <div className="family">
            <Parent secret={secret}/>
        </div>
    );

}

export default Family;