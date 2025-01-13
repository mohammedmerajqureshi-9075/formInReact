import { useState } from 'react'
import '../Form/SignInForm.css'
import axios from 'axios'

const SignInForm = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
   const [error,setError]=useState(null);
   const [loader,setLoader]=useState(false);

    let handleSubmit =async (e) => {
     e.preventDefault();
        // console.log('username',username)
        // console.log('email',email)
        // console.log('password',password)
        try {
          const response = await axios.post('http://localhost:5098/user/sign',{
            username,
            email,
            password
          })

          if (username||email||password) {
            alert('form submitted succesfully')
          }
          
          console.log(response.data)
        } catch (error) {
          console.log(`error occured at axios ${error.message}`)
          setError(error.message)
        } finally{
          setLoader(false)
        }
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
        {error &&  <p style={{color:'black',fontFamily:'arial',}}>{error}</p>}
        <div className="btn"><button type='submit'>{loader ? 'Submitting...' : 'Submit'}</button></div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
