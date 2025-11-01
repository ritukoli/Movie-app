function MovieCard({movie}){

    function FavButton(){
        alert("clicked")
    }
//  a layout for all the movie card (doesnot have any value here)
    return(
        <div className="Movie-card"> 
            <div className="Movie-poster">
                <img src={movie.url} alt={movie.title}/>
            </div>
            <div className="Movie-overlay">
                <button className="Fav-button" onClick={FavButton}>🤍</button>
            </div>
            <div className="Movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard
