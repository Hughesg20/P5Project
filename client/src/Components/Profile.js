import React, {useState} from 'react'

function Profile() {

  const [zipcode,setZipcode] = useState()
  const handleZipcode = (e) => setZipcode(e)

  const handleAddZip = (e) => {
    e.preventDefault()
    fetch(`/addzip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        zipcode: zipcode
      }),
    })
  }
  return (

    <div className="form">
      <h1>add your local address below for weather updates</h1>
      <form className="zipcode_form" onSubmit={(e)=>handleAddZip(e)}>
          <label>Zipcode</label>
          <input
            type="text"
            value={zipcode}
            placeholder="Add Zipcode"
            onChange={(e)=> handleZipcode(e)}
          />
          <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Profile