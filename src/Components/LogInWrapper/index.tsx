"use client";

import LogIn from "../Login";
import { useUserContext } from "@/utils/contexts";
import { UserContextType } from "@/utils/types";
import Menu from "../Menu";
import GuestHome from "../GuestHome";
import Button from "../Button";

const LogInWrapper = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserContext() as UserContextType;
  const { setUser } = useUserContext() as UserContextType;

  const handleLogOut = () => {
    setUser(null);
  };

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
          <div className="flex justify-between p-6">
            <div className="text-black space-y-3">
              <p className="text-xl">Hi {user.name}</p>
              <p>Welcome to the inside!</p>
              <p>
                Browse, save and prepare your favourite recipes
                <span className="text-2xl">&#127837;</span>
              </p>
            </div>
            <div className="fixed top-[70px] right-4 z-50 md:top-[128px]">
              <Button onClick={handleLogOut} buttonText="Log Out" />
            </div>
          </div>
          {children}
        </>
      )}
    </div>
  );
};

export default LogInWrapper;
