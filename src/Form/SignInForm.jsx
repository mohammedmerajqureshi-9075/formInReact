import { useState } from 'react'
import '../Form/SignInForm.css'

const SignInForm = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
   
    let handleSubmit = (e) => {
     e.preventDefault();
        console.log(username)
        console.log(email)
        console.log(password)
    }


  return (
    <div>
      <div className="form-sign-in">
        <div className="main-form">
        <div className="heding">
            <h2>Sign In</h2>
        </div>
      <form action="" onSubmit={handleSubmit}>
       <div className="usename">
       <label htmlFor="">Username</label>
       <input type="text" 
       placeholder="username"
        name="username"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />
       </div>
        <div className="email">
        <label htmlFor="">Email</label>
        <input type="email"
         placeholder="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="password">
        <label htmlFor="">Password</label>
        <input type="password"
         placeholder="password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="btn"><button type='submit'>submit</button></div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
