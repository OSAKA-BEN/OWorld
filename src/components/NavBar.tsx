'use client';

import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef();

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav onClick={handleClickOutside} ref={wrapperRef} className="navbar bg-base-100 z-[1] bg-transparent flex items-center justify-between">
      <div className="flex mx-4">
        <button className="btn btn-square btn-ghost">
            <img src="/ufo-svgrepo-com.svg" alt="ovni-icon" />
        </button>
      </div>
      <div className="flex-auto">
          <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-primary input-sm w-full max-w-sm"
          />
          <button className="mx-4 btn btn-outline btn-primary btn-sm">OK</button>
      </div>
      <div className="flex justify-center w-full">
          <p className="alien-font shadow-neon text-[22px] tracking-[0.5em]">texte anime extraterrestre</p> 
      </div>
      <div className="flex-none">
        <div className="avatar m-2">
          <div className="w-10 rounded-full ring ring-primary cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleDropdown(); }}>
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profil-picture" />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 w-48 mt-16 py-2 bg-neutral rounded-lg shadow-xl">
              <a href="#" className="block px-4 py-2 text-primary hover:bg-indigo-500 hover:text-white">Option 1</a>
              <a href="#" className="block px-4 py-2 text-primary hover:bg-indigo-500 hover:text-white">Option 2</a>
              <a href="#" className="block px-4 py-2 text-primary hover:bg-indigo-500 hover:text-white">Option 3</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar