import React, { useEffect, useState } from 'react'

export default function Users() {
  const [users,setUsers] = useState([]) 
      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
      },[])

      console.log(users)
      const handleClick =() =>{

      }


  return (
    <div>
      <h1 className='text-4xl text-center'>
        All Users
      </h1>
      <div className='grid grid-cols-3 gap-4'>
      {
        users.map((user)=><div className="card bg-base-100 w-96 shadow-xl">     
        <div className="card-body">
          <h2 className="card-title">{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <div className="card-actions justify-start ">
            <button onClick={()=>handleClick(user)} className="btn btn-primary text-white">Contact Now</button>
          </div>
        </div>
      </div>)
      }
      </div>
    </div>
  )
}
