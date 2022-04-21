import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { toggleUser } from "./redux/userSlice"
import './styling/MovieCard.css'

function MovieCard(movie) {
    const dispatch = useDispatch()
    const user = useSelector(state=> state.user)

    const addtofav = ()=>{
        fetch(`/fav`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              mid: movie.movie.mid
            })
        })
    }
    


  return (
    <div>
        <h2>{movie.movie.name}</h2>
        <img className="movie-image"src={movie.movie.image}></img>
        <button onClick={()=>{addtofav()}}>fav</button>
    </div>
  )
}

export default MovieCard