//HOC
import withFetch from './WithFetch';

const MovieList=(props)=>{
    const{movies}=props;

    return(
        <div>
            <h2> MovieList with HOC</h2>
            {
                <ul>
                {movies.map((movie,index)=>{
                <li key={index}>
                    <img src={movie.poster} alt={movie.title}></img>
                    <span>movie.title</span>
                </li>
               
                })}
                </ul>
            }
        </div>
    );
}
const HOC = withFetch(MovieList);
export default HOC;