import React from 'react'
import{ useDispatch, useSelector } from "react-redux"
import{ toggleUser } from "./redux/userSlice"

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
              user_id: user,
              mid: movie.mid,
            })
        })
    }
    


  return (
    <div>
        <p>{movie.name}</p>
        <button> onClick={()=>{addtofav()}}fav</button>
    </div>
  )
}

export default MovieCard