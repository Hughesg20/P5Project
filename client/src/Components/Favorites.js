import React, {useState, useEffect } from 'react'
import MovieCard from './MovieCard'
function Favorites() {
const [movies,setMovies] = useState([])
    useEffect(()=>{
        fetch('/favoritemovies')
        .then(r=>r.json())
        .then(r=>setMovies(r))
        .then(console.log(movies))
    },[])


  return (
    <div>
      <h1>yo</h1>
      {movies.map(movie=>{return <MovieCard movie={movie} key={movie.id}/>})}
    </div>
    
  )
}

export default Favorites