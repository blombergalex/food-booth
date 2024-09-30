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
          <p className="p-2">Hi {user.name}</p>
          {children} 
        </>
      )}
    </div>
  );
};

export default LogInWrapper;
