import React, {useState} from 'react'
import {useNavigate as navigate} from 'react-router-dom'



function SignUp() {
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleUsername = (e) => setUsername(e.target.value)
    const handleFirstname = (e) => setFirstname(e.target.value)
    const handleLastname = (e) => setLastname(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    
    
    
    const handleSignup = (e) => {
      e.preventDefault()
      console.log("signupsubmit")
      fetch(`/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            firstname: firstname,
            eamil:email,
            lastname: lastname,
            password: password,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setUsername(data);
            navigate("/");
          });
        }
      });
    }
    
    
      return (
        <>
          <h1>Signup</h1>
          <br/>
          <div className="form">
            <form className="Signup_form" onSubmit={(e)=>handleSignup(e)}>
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  placeholder="username"
                  onChange={(e)=> handleUsername(e)}
                />
                <br/>
                <label>Firstname</label>
                <input
                  type="text"
                  value={firstname}
                  placeholder="Firstname"
                  onChange={(e)=> handleFirstname(e)}
                />
                <br/>
                <label>Lastname</label>
                <input
                  type="text"
                  value={lastname}
                  placeholder="Lastname"
                  onChange={(e)=> handleLastname(e)}
                />
                <br/>
                <label>Password</label>
                <input
                  type="text"
                  value={password}
                  placeholder="password"
                  onChange={(e)=> handlePassword(e)}
                />
                <br/>
                <button type="submit">SignUp</button>
            </form>
          </div>
    
        </>
      )
    }

export default SignUp