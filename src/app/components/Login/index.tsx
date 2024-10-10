"use client";

import { SetStateAction, useState, useEffect } from "react";
import { registeredUsers } from "@/utils/users";
import { UserContextType, UserType } from "@/utils/types";
import { useUserContext } from "@/utils/contexts";
import Button from "@/app/components/Button";

const LogIn = () => {
  const [userInput, setUserInput] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showUsernames, setShowUsernames] = useState<boolean>(false);

  const { setUser } = useUserContext() as UserContextType;

  const handleChange = (e: {
    target: { value: SetStateAction<string | null> };
  }) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    const loggedInUser = registeredUsers.filter(
      (user: UserType) => user.name === userInput
    );
    if (loggedInUser.length) {
      setUser(loggedInUser[0]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleShowUsernames = () => {
    setShowUsernames(!showUsernames);
    console.log(showUsernames)
  }

  const hideShowUserNames = () => {
    setTimeout(() => {
      toggleShowUsernames()
    }, 3500)
  }

  return (
    <>
      {showLogin ? (
        <div className="space-2 text-black p-2 text-right bg-orange-400 animate-fade-in-down">
          <Button buttonText="Close" onClick={toggleLogin} />
          <label htmlFor="user-input"></label>
          <p className="m-2 text-black">Got an account? Log in here!</p>
          <input
            className="text-orange-700 p-4 rounded-md h-6 m-2 outline-none border border-1 border-orange-700 "
            id="user-input"
            placeholder="Enter username"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <Button buttonText="Go" onClick={handleClick} />
          <div className="flex">
            <p 
              onClick={toggleShowUsernames} 
              onMouseEnter={toggleShowUsernames}
              onMouseLeave={hideShowUserNames}
              className="ml-auto w-fit rounded-full px-2 m-1 bg-orange-300 cursor-pointer"
            >
              ?
            </p>
            </div>
            {showUsernames && (
              <div className="ml-auto w-fit p-3 bg-orange-300 rounded-md my-2">
                <p className="text-start m-1">Registered users:</p>
                <div className="flex flex-wrap">
                  {registeredUsers &&
                    registeredUsers.map((user: UserType) => (
                      <p className="w-fit m-1">{user.name}</p>
                    ))
                  }
                </div>
              </div>
            )}
        </div>
      ) : (
        <div
          className="fixed top-[10px] right-4 z-50 flex items-center cursor-pointer border border-1 text-orange-700 border-orange-700 rounded-md p-1 hover:text-white hover:bg-orange-700 transition-all"
          onClick={toggleLogin}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          Login
        </div>
      )}
    </>
  );
};

export default LogIn;
