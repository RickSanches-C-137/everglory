import React, { useState } from "react";
import { Link } from "react-router-dom";

function DashNav() {
  const [nav, setNav] = useState(true);

  return (
    <div class="bg-gray-900">
      <div class="h-full">
        <nav class="md:flex md:justify-around ">
          <div class="flex justify-between">
            <h1 class="font-bold uppercase p-4 text-white text-3xl">
              <a href="/" class="hover:text-gray-200">
                Everglory Logistics
              </a>
            </h1>
            <div
              class="cursor-pointer md:hidden mx-10 mt-6"
              onClick={() => setNav(!nav)}
            >
              <svg
                class="w-6 ml-2"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </div>
          {nav && (
            <ul class="text-md md:mt-6 md:flex md:justify-around">
              <li class="py-1">
                <a href="/" class="px-4 flex text-white">
                  <span>Home</span>
                </a>
              </li>
              <Link to="/history">
                <li class="py-1 px-4 flex text-white">
                  <span>My Parcels</span>
                </li>
              </Link>
              <Link to="/search">
                <li class="py-1 px-4 flex text-white">
                  <span>Search</span>
                </li>
              </Link>
              <Link to="/faqs">
                <li class="py-1 px-4 flex text-white">
                  <span>FAQs</span>
                </li>
              </Link>

              
              
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}

export default DashNav;
