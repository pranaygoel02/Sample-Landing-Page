import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav className="bg-primary text-white">
        <div className="max-w-7xl mx-auto ">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center justify-between w-full gap-16 my-8">
              {/* logo */}
              <div>
                <a href="/" className="flex gap-1 font-bold items-center ">
                  <span>Logo</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                {navData.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    className="hover:text-secondary"
                    activeClassName="active"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-primary overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 tracking-wider">
              {navData.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className="hover:text-secondary"
                  activeClassName="active"
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
