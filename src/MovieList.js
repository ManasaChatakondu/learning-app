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
            {
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie,index)=>(<tr><td>{movie.Title}</td><td>{movie.Director}</td></tr>))}
                    </tbody>
                </table>
            }
        </div>
    );
}
const HOC = withFetch(MovieList);
export default HOC;