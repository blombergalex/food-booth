'use client'

import { SetStateAction, useState } from "react"
import { registeredUsers } from "@/utils/users";
import { UserContextType, UserType } from "@/utils/types";
import { useUserContext } from "@/utils/contexts";
import Button from "../Button";

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
    <div className="space-x-2 text-black p-2 text-right border border-blue-400">
      <p className="m-2 text-black">Are you here often? Log in to see your saved recipes.</p>
      <label htmlFor="user-input">Enter user name</label>
      <input className="text-black p-4 rounded-md h-6 m-2" id="user-input" onChange={handleChange}/>
      <Button buttonText="Go" onClick={handleClick}/>
    </div>
  )
}

export default LogIn;