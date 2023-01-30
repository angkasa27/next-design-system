import React from "react";
import Icon from "@assets/Icon/Icon";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-slate-900 border-default">
      <nav
        aria-label="Global"
        className="flex flex-nowrap basis-full items-center container"
      >
        <Link className="flex-none subtitle-3 dark:text-white" href="/">
          Check it!
        </Link>

        <div className="flex items-center ml-auto sm:w-full sm:gap-x-3 sm:order-3 sm:ml-0">
          <div className="flex items-center relative z-10 ml-auto">
            <a
              className="inline-flex flex-shrink-0 justify-center items-center h-9 w-9  hover:text-blue-600 font-medium  dark:hover:text-gray-500"
              href="https://github.com/angkasa27/next-design-system"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Icon name="Moon" size={26} />
              ) : (
                <Icon name="Sun" size={26} />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
