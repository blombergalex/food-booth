import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  const baseClasses = "text-white flex items-center text-lg";
  const activeClasses = "underline underline-offset-[5px]";

  return (
    <nav className="flex justify-evenly py-4 bg-orange-400 sticky top-[136px] md:top-[144px]">
      <Link
        href="/"
        className={`${baseClasses} ${pathname === "/" ? activeClasses : ""}`}
      >
        Home
      </Link>
      <Link
        href="/profile"
        className={`${baseClasses} ${pathname === "/profile" ? activeClasses : ""}`}
      >
        Profile
      </Link>
      <Link
        href="/category"
        className={`${baseClasses} ${pathname === "/category" ? activeClasses : ""}`}
      >
        Category
      </Link>
    </nav>
  );
};

export default Menu;
