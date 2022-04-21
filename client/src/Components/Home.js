import React from 'react'

function Home() {

  function yo (){
    fetch('/favorites')
        .then(r=>r.json())
        .then(r=>console.log(r[1]))
  }


  return (
    <>
    <div>Home</div>
    <button onClick={()=>{yo()}}>yo</button>
    </>
  )
}

export default Home