
import Colorizer from './Colorize';
import Greeting from './Greeting';
import FindUser from './FindUser';
import CountRef from './CountRef';
import Focus from './Focus';
import MovieList from './MovieList';
import Parent from './Parent';
import UseCallbackExample from './UseCallback';
import ShowUsers  from './UseEffectExampleWithFetch';
import Startup from'./UseContext/Startup';
import ReducerApp from './Reducer/ReducerApp';
import './App.css';

/*
function App() {
  const pets=[
    {
      name: 'Dolly',
      type: 'cat',
      description: 'Dolly is funny and loves to be around people',
      skills: ['fetch', 'play dead', 'roll over'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829788/cats/remi-remino-E9kVmtiqqGE-unsplash_uivwfy.jpg',
    },
    {
      name: 'Molly',
      type: 'cat',
      description: 'Molly is a sweet and cuddly cat stretch a lot!',
      skills: ['play dead', 'meow', 'purr'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
    },
    {
      name: 'Molly1',
      type: 'cat',
      description: 'Molly is a sweet and cuddly cat stretch a lot!',
      skills: ['play dead', 'meow', 'purr'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
    },
  ];
  return (
    <div className="App">
      <h1>Pets</h1>
      <ul className="container">
        {
          pets.map((pet,index)=>(
            <li key={index}>
                <h1>{pet.name}</h1>
                <p>{pet.description}</p>
                <img src={pet.image} 
                  alt={pet.name} 
                  width="200px"
                  height="200px" />
                <ul className="skills">
                  {
                    <div>
                      <h5>Skills</h5>
                        {pet.skills.map((skill, index)=>(
                          <li key={skill}>{skill}</li>
                          ))
                        }
                    </div>
                  }
                </ul>    
              </li>
          ))
      }
      </ul>
    </div>
  );
}


function App(){

  return(
    <div className="App">
      <Colorizer/>
      <Greeting randomMax={3}/>
      <FindUser/>
      <MovieList/>
    </div>
  );
}*/

function App(){

  return(
    <div className="App">
      <ReducerApp/>
      
    </div>
  );
}
export default App;
