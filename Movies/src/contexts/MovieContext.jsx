import { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setfavorites] = useState([])

    useEffect(() => {
        const data = localStorage.getItem('favorites')
        if (data) {
            setfavorites(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addFavorite = (movie) => {
        setFavorites(favorites => [...favorites, movie])
    }

    const removeFavorite = (movieId) => {
        setfavorites(prev => prev.filter(movie => movie.id != movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id == movieId)
    }

    return (
        <MovieContext.Provider value={{ favorites, isFavorite, addFavorite, removeFavorite }}>
            {children}
        </MovieContext.Provider>
    )
}