"use client"
import { signIn,signOut, useSession } from "next-auth/react"

export default function () {
  const session=useSession();
  return <div>
      Signup Page 

      <button onClick={() =>{
          signIn()
      }}>Signin</button>


      <button onClick={() => {
          signOut()
      }}>logout</button>

      {JSON.stringify(session)}


  </div>
}