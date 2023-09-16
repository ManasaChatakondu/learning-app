import { useEffect, useState } from "react";



const Greeting = ({randomMax})=>{

    const[greeting,setGreeting] = useState('');

    const[randomNumber, setRandomNumber]=useState(
        Math.floor( Math.random()*randomMax)+1
    );

    useEffect(()=>{
        console.log('onmount loading');
        console.log(randomMax);
    },[]);

    useEffect(()=>{
        window.localStorage.setItem('random','randomnumber')
        window.localStorage.setItem('randomMax',`${randomMax}randomMax from props`)

        switch(randomNumber){
            case 1:
                setGreeting('Hello');
                break;
            case 2:
                setGreeting('Hai');break;
            case 3:
                setGreeting('Hey');break;
            case 4:
                setGreeting('Howdee');break;
            default:
                setGreeting('Hellooooo');break;
        }

        return function cleanup(){
            console.log('cleaup');
            window.localStorage.removeItem('random');
        }
    },[randomNumber,randomMax]);

    return(
        <div>
            <h1>{randomNumber} {greeting}</h1>
        </div>
    );

}
export default Greeting;