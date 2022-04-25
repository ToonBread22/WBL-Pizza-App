import React, {useState} from 'react'

const Login = () => {
      const [isLoggedIn, setLoggedIn] = useState(false)
      const [username, setUsername] = useState('')
      const [password, setPassword] = userState('')
      const handleSubmit = () =>{
          const config = {
              "method":"POST",
              "headers":{
              "Content-Type":"application/json"
            },
              "body":JSON.stringify({
                  username,
                  password
              })
          }
          fetch("/register",congfig)
      }
    return (
        <div>
            <label htmlFor='username'>
                Username:
            </label>
            <input
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
                type="text"
                placeholder='username'
                name='username'
            />
            <label htmlFor='password'>
                Password:
            </label>
            <input
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
                type="text"
                placeholder='username'
                name='password'
            />
            <input 
            onClick={handleSubmit}
                type="submit"
                value={isLoggedIn ? 'Logout' : 'Login/Register'}
            />
        </div>
    )
}

export default Login