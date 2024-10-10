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

  const [scrollY, setScrollY] = useState(false)
  
  const handleScrollY = () => window.scrollY > 10 ? setScrollY(true) : setScrollY(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);

    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, [])

  const pathname = usePathname();

  return (
    <MotionContainer
      className={
        `fixed left-0 top-0 m-auto flex h-fit w-full items-center justify-between border-b-2 border-black/40 p-3 lg:py-6 lg:px-44 transition-all ${scrollY ? "hidden" : "flex"}`
      }
      y={-100}
      delay={0.6}
      duration={0.5}
    >
      <nav className="flex justify-between gap-4 lg:gap-8">
        {navBar.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.link}
              className={`${t("navFont")} font-extrabold lg:hover:text-[#2f7df4] lg:text-xl ${pathname === item.link && "text-zinc-200"}`}
              >
              {t(item.name)}
            </Link>
          );
        })}
      </nav>
      <LangBtn />
    </MotionContainer>
  );
};

export default Navbar;
