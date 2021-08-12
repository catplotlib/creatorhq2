import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between  bg-gray-800 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block  whitespace-nowrap uppercase text-white"
            >
              {/* CreatorsHQ */}
              <img className="h-24 w-24" src={logo} alt="" />
            </Link>
            {/* <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              CreatorsHQ
            </a> */}
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none  lg:ml-auto">
              <li className="nav-item my-4 md:my-0">
                <Link
                  to="/signin"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Log In
                </Link>
              </li>

              <li className="nav-item my-4 md:my-0">
                <Link
                  to="/signup"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
