import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../Components/MovieCard'
function Favorite(){
    const {favorites} = useMovieContext()

    if (favorites){
        return (
            <div className='favorites'>
                <div className="movies-grid">
                {favorites.map((movie) => 
                movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
                    (<MovieCard movie={movie} key={movie.id}/>
                ))}
                </div>
            </div>
        )
    }
    return(
        <div className="favorites-empty">
            <h2>No favorite movie yet!</h2>
            <p>Start adding movies here and they will appear</p>
        </div>
    )
}

export default Favorite;