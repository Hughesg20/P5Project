import React, {useState} from 'react'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleUsername = (e) => setUsername(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)



  const handleLogin = (e) => {
    e.preventDefault()
    
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((data) => {
            setUsername(data);
            console.log(data)
          })
      }
    })
  }

  return (
    <>
      <h1>Login</h1>
      <div className="form">
            <form className="login_form" onSubmit={(e)=>handleLogin(e)}>
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  placeholder="username"
                  onChange={(e)=> handleUsername(e)}
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
                <button type="submit">Login</button>
            </form>
          </div>
        </>
  )
}

export default Login