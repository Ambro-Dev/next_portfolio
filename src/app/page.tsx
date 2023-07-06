"use client";
import Image from "next/image";
import logo from "../../public/ambro-dev-opacity-white.png";
import React from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <main className="relative container flex min-h-screen flex-col items-center justify-between mx-auto px-4">
      <nav className="flex items-center flex-row justify-between w-full">
        <div
          className="flex items-center justify-between w-3/4 md:w-1/2 hover:cursor-pointer transition duration-700 ease-in-out hover:scale-105"
          onClick={() => scrollTo(0, 0)}
        >
          <Image src={logo} alt="logo" height={100} />
        </div>
        <div className="hidden items-center justify-end space-x-10 w-1/2 md:flex">
          <a href="#" className="text-sm font-bold hover:scale-105">
            About
          </a>
          <a href="#" className="text-sm font-bold hover:scale-105">
            Skills
          </a>
          <a href="#" className="text-sm font-bold hover:scale-105">
            Projects
          </a>
          <a href="#" className="text-sm font-bold hover:scale-105">
            Contact
          </a>
        </div>
        {!isMenuOpen ? (
          <div className="flex flex-col items-end justify-center w-1/4 md:hidden transition duration-700 ease-in-out">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full focus:outline-none transition hover:scale-110 duration-700 ease-in-out"
            >
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5.75C3 5.33579 3.33579 5 3.75 5H20.25C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75ZM3 11.75C3 11.3358 3.33579 11 3.75 11H20.25C20.6642 11 21 11.3358 21 11.75C21 12.1642 20.6642 12.5 20.25 12.5H3.75C3.33579 12.5 3 12.1642 3 11.75ZM3.75 17C3.33579 17 3 17.3358 3 17.75C3 18.1642 3.33579 18.5 3.75 18.5H20.25C20.6642 18.5 21 18.1642 21 17.75C21 17.3358 20.6642 17 20.25 17H3.75Z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="absolute flex right-0 top-0 flex-col w-1/4 h-200 md:hidden content-center border-red-100">
            <div className="flex flex-col items-center justify-center p-10 w-full h-full space-y-10">
              <a href="#" className="text-sm font-bold hover:scale-105">
                About
              </a>
              <a href="#" className="text-sm font-bold hover:scale-105">
                Skills
              </a>
              <a href="#" className="text-sm font-bold hover:scale-105">
                Projects
              </a>
              <a href="#" className="text-sm font-bold hover:scale-105">
                Contact
              </a>
            </div>
            <div className="flex items-end justify-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full focus:outline-none transition  duration-700 ease-in-out hover:scale-110"
              >
                <svg
                  className="hover:motion-safe:animate-pulse w-8 h-8 text-white fill-current"
                  viewBox="0 0 30 36"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.256 23.481c0 0.269 0.106 0.544 0.313 0.75 0.412 0.413 1.087 0.413 1.5 0l14.119-14.119 13.913 13.912c0.413 0.413 1.087 0.413 1.5 0s0.413-1.087 0-1.5l-14.663-14.669c-0.413-0.412-1.088-0.412-1.5 0l-14.869 14.869c-0.213 0.212-0.313 0.481-0.313 0.756z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}
