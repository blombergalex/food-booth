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
    <div className="space-x-2 text-black p-2 text-right bg-yellow-400">
      <label htmlFor="user-input"></label>
      <p className="m-2 text-black font-semibold">Got an account? Log in here!</p>
      <input className="text-black p-4 rounded-md h-6 m-2" id="user-input" placeholder="Enter username" onChange={handleChange}/>
      <Button buttonText="Go" onClick={handleClick}/>
    </div>
  )
}

export default LogIn;