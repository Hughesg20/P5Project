import React, {useState, useEffect } from 'react'
import MovieCard from './MovieCard'
function Favorites() {
const [movies,setMovies] = useState([])
    useEffect(()=>{
        fetch('/favorites')
        .then(r=>r.json())
        .then(r=>setMovies(r))
    },[])


  return (
    <div>
      <h1>yo</h1>
      {movies.map(movie=>{<MovieCard movie={movie}/>})}
    </div>
    
  )
}

export default Favorites