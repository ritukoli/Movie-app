import MovieCard from "../components/MovieCard";

function HomePage() {

    const movies = [
        { id: 1, title: "titanic", release_date: "1996" },
        { id: 2, title: "Inception", release_date: "2010" },
        { id: 3, title: "Interstellar", release_date: "2014" },
        { id: 4, title: "Avatar", release_date: "2009" },
        { id: 5, title: "The Dark Knight", release_date: "2008" },
        { id: 6, title: "The Matrix", release_date: "1999" }
    ]

    return (
        <div className="homePage">
            <div className="movie-grid">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}            
                </div>
        </div>
    )
}

export default HomePage