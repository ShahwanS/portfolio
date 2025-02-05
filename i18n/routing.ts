import { defineRouting } from "next-intl/routing";
import {
  createNavigation,
  createSharedPathnamesNavigation,
} from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "de",
  pathnames: {
    "/": "/",
    "/pathnames": {
      en: "/pathnames",
      de: "/pfadnamen",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
