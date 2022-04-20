import React, {useState, useEffect } from 'react'

function Favorites() {
const [movies,setMovies] = useState([])
    useEffect(()=>{
        fetch('/favorites')
        .then(r=>r.json())
        .then(r=>setMovies(r))
    },[])


  return (
    <div>
      {movies.map(movie=>{<MovieCard movie={movie}/>})}
    </div>
    
  )
}

export default Favorites