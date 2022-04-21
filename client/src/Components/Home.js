import React,{useState,useEffect} from 'react'
import MovieCard from './MovieCard'
function Home() {
const[movies,setMovies] = useState()
  useEffect (()=>{
    fetch('/movies')
        .then(r=>r.json())
        .then(r=>setMovies(r))
        .then(console.log(movies))
  },[])
  

  return (
    <>
    <div>Home</div>
    {movies?movies.map(movie=>{return <MovieCard movie={movie} key={movie.id}/>}):null}
    
    </>
  )
}

export default Home