function MovieCard({movie}){

    function FavButton(){
        alert("clicked")
    }
//  a layout for all the movie card (doesnot have any value here)
    return(
        <div className="movie-card"> 
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={FavButton}>🤍</button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard
