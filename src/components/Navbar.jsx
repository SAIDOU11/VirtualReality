import { useState } from "react";
import Logo from "../assets/images/vr-logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNavbar = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="relative">
      <nav className="fixed bg-[#121212] w-full top-0 z-50 py-3 backdrop:blur-lg border-b border-blue-light-vr">
        <div className="container px-4 mx-auto  text-sm ">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img
                className="h10 w-10 mr-2"
                src={Logo}
                alt="Logo Virtual Reality"
              />
              <span className="text-xl tracking-tight text-blue-light-vr">
                Virtual Reality
              </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 m-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-gray-100 hover:text-blue-light-vr"
                    href={item.href}
                  >
                    {item.label}{" "}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 border rounded-md ">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-light-vr to-blue-darker-vr py-2 px-3 rounded-md text-red-600 font-bold "
              >
                Create an account
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end ">
              <button onClick={toggleNavbar} className="text-blue-light-vr">
                {openNav ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {openNav && (
            <div className="fixed right-0 z-20 my-0  h-[860px] w-full bg-[#121212]  flex flex-col justify-center items-center lg:hidden ">
              <ul className="w-full h-[550px] text-center ">
                {navItems.map((item, index) => (
                  <li key={index} className="py-6 text-2xl">
                    <a href={item.href} className="hover:text-blue-light-vr">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md text-xs">
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-light-vr to-blue-darker-vr py-2 px-3 rounded-md text-black font-bold text-xs"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
