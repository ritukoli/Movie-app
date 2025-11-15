import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovie, getPopularMovie } from "../services/api";

function Home() {

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return
        if (loading) return
        
        setLoading(true)
        try {
            const SearchResults = await searchMovie(searchQuery)
            setMovies(SearchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to load movies...")
        } finally {
            setLoading(false)
        }


        // setSearchQuery("")
    }

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const PopularMovies = await getPopularMovie()
                setMovies(PopularMovies)
            }
            catch (err) {
                console.log(err)
                setError('failed to load movies')
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder="search for movies" className="search-input"
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button" >Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}
            {loading ? (<div className="loading">loading...</div>) :
                (<div className="movies-grid">
                    {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.id} movie={movie} />)}
                </div>)}

        </div>
    )
}

export default Home