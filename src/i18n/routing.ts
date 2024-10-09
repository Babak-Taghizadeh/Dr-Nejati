import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // list of locales that are supported
  locales: ["fa", "en", "tr"],

  // triggers when no locales have chosen
  defaultLocale: "fa"
});

//next.js navigation wrappers
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
