'use client'

import { SetStateAction, useState } from "react"
import { registeredUsers } from "@/utils/users";
import { UserContextType, UserType } from "@/utils/types";
import { useUserContext } from "@/utils/contexts";

const LogIn = () => {
  const [userInput, setUserInput] = useState<string | null>(null);

  const {setUser} = useUserContext() as UserContextType

  const handleChange = (e: { target: { value: SetStateAction<string | null>; }; }) => {
    setUserInput(e.target.value)
  }

  const handleClick = () => {
    const loggedInUser = registeredUsers.filter((user:UserType) => user.name === userInput); 
    if (loggedInUser.length) {
      console.log(loggedInUser[0])
      setUser(loggedInUser[0]);
    // } else if (userInput==('')) {
    //   console.log('no user found')
    }
  }

  return(
    <div className="space-x-2">
      <p className="m-2">Enter username to log in</p>
      <label htmlFor="user-input">Enter user name</label>
      <input className="text-black p-2 rounded-md" id="user-input" onChange={handleChange}/>
      <button className="bg-green-500 p-2 rounded-md" onClick={handleClick}>Login</button>
    </div>
  )
}

export default LogIn;