import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    // Check if the user has a theme saved in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    // Otherwise, use the system's theme preference (light or dark)
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "forest"
      : "acid";
    return systemTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme!);
    document.querySelector("html")?.setAttribute("data-theme", theme!);
  }, [theme]);

  const toggleTheme = (e: any) => {
    // Toggle theme based on checkbox checked value
    setTheme(e.target.checked ? "acid" : "forest");
  };

  return (
    <div
      className="navbar sticky top-0 z-50 bg-base-300 pb-4 text-neutral-content shadow-lg"
      id="navbar"
    >
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a href="#home" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" className="btn btn-ghost btn-sm rounded-btn">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about-me" className="btn btn-ghost btn-sm rounded-btn">
              About
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="mailto:diegogar577@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className=" mx-2 flex-none px-2">
        <span className="hidden text-lg font-bold sm:block">
          Diego O. Garcia
        </span>
      </div>

      <div className="mx-2 flex-1 px-2">
        <div className="hidden items-stretch lg:flex">
          <a href="#home" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </a>
          <a href="#portfolio" className="btn btn-ghost btn-sm rounded-btn">
            Portfolio
          </a>
          <a href="#about-me" className="btn btn-ghost btn-sm rounded-btn">
            About
          </a>
          <a href="#technologies" className="btn btn-ghost btn-sm rounded-btn">
            Technologies
          </a>
          <a
            href="mailto:diegogar577@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-sm rounded-btn"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex-none">
        <label className="swap swap-rotate">
          {/*this hidden checkbox controls the state*/}
          <input type="checkbox" onClick={toggleTheme} />

          <SunIcon></SunIcon>

          <MoonIcon></MoonIcon>
        </label>
      </div>
    </div>
  );
}
