"use client";

import LangBtn from "./LangBtn";
import MotionContainer from "./MotionContainer";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { navBar } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Navbar = () => {
  const t = useTranslations("NavBar");

  const [scrollY, setScrollY] = useState(false);

  const handleScrollY = () =>
    window.scrollY > 10 ? setScrollY(true) : setScrollY(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  const pathname = usePathname();

  return (
    <MotionContainer
      className={`fixed left-0 right-0 top-0 flex w-dvw justify-between items-center lg:justify-between border-b-2 border-black/40 p-3 lg:px-44 lg:py-6 ${scrollY ? "hidden" : "flex"}`}
      y={-100}
      x={0}
      delay={0.8}
      duration={0.5}
    >
      <nav className="flex items-center gap-3 lg:gap-8">
        {navBar.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.link}
              className={`font-bold lg:text-xl lg:hover:text-[#2f7df4] ${pathname === item.link && "text-zinc-200"}`}
            >
              {t(item.name)}
            </Link>
          );
        })}
      </nav>
      <div className="flex-shrink-0">
      <LangBtn />
      </div>
    </MotionContainer>
  );
};

export default Navbar;
