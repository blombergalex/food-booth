"use client";

import LogIn from "../Login";
import { useUserContext } from "@/utils/contexts";
import { UserContextType } from "@/utils/types";
import Menu from "../Menu";
import GuestHome from "../GuestHome";

const LogInWrapper = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserContext() as UserContextType;

  return (
    <div>
      {!user ? (
        <>
          <LogIn />
          <GuestHome />
        </>
      ) : (
        <>
          <Menu />
          <div className="p-6 text-black">
            <p className="text-xl">Hi {user.name}</p>
            <p>Welcome to the inside!</p>
            <p>Browse, save and prepare your favourite recipes!</p>
          </div>
          {children} 
        </>
      )}
    </div>
  );
};

export default LogInWrapper;
