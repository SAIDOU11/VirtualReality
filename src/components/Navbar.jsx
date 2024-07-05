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
    <nav className="sticky top-0 z-50 py-3 backdrop:blur-lg border-b border-blue-light-vr">
      <div className="container px-4 mx-auto relative text-sm ">
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
          <ul className="hidden lg:flex ml-14 space-x-12 ">
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
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} className="hover:text-blue-light-vr">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md text-sm">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-light-vr to-blue-darker-vr py-2 px-3 rounded-md text-red-600 font-bold text-sm"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
