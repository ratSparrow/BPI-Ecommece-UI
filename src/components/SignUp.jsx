import { useState } from "react"

export default function SignUp() {
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [username,setUsername]= useState('')
  const [password,setPassword]= useState('')

  const handleNameChange = (event) =>{
    setName(event.target.value)
  }
  const handleEmailChange = (event) =>{
    setEmail(event.target.value)
  }
  const handleUserNameChange = (event) =>{
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      name:name,
      email:email,
      username:username,
      password:password
    }
    console.log(data)
  }

  return (
    <>
      <h1 className="text-3xl text-center">User Sign Up</h1>

      <div>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            onChange={handleNameChange}
            className="input input-bordered my-2 input-primary w-full max-w-xs" />
            <br />
          <input
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            className="input input-bordered my-2 input-primary w-full max-w-xs" />
<br />
          <input
            type="text"
            placeholder="Username"
            onChange={handleUserNameChange}
            className="input input-bordered my-2 input-primary w-full max-w-xs" />
<br />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            className="input input-bordered my-2 input-primary w-full max-w-xs" />
<br />
          <input
            type="submit"
            placeholder=""
            className="input input-bordered my-2 input-primary w-full max-w-xs" />


        </form>
      </div>
    </>
  )
}
